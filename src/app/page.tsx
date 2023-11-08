'use client'
import Container from '@mui/material/Container'
import { useDark } from './context'
import { useFetchPokemons, useFetchTypes } from './hooks'
import { Header, Skeleton, SkeletonSelect, Card, Filter } from './components'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import { useEffect, useState } from 'react'

const MAIN_CLASS = 'main';
const DARK_CLASS = 'isDark';

export default function Home() {
  const [typeSelected, setTypeSelected] = useState<string>('')
  const [dataFilter, setDataFilter] = useState<any>([])
  const {isDark, setIsDark} = useDark()
  const {data: pokemons, isLoading} = useFetchPokemons()
  const {data: types, isLoading: isLoadingType } = useFetchTypes()

  useEffect(() => {
    async function filterPokemons() {
      let newArrayPokemons: any[] = []
      pokemons.map((pokemon: any) => {
        pokemon.types.map((type: any) => {
          if (type.type.name === typeSelected) newArrayPokemons.push(pokemon)
        })
      })

      setDataFilter(newArrayPokemons)
    }

    filterPokemons()
  }, [pokemons, typeSelected])

  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ')

  const handleDarkMode = () => {
    setIsDark(!isDark)
  }

  const handleSelectType = (type: string) => {
    setTypeSelected(type)
  }

  return (
    <main className={className}>
      <Header onClick={handleDarkMode} />
      <Container>
        { isLoadingType && <SkeletonSelect /> }
        { !isLoadingType && types &&
          <Box mb={4} mt={4}>
            <Filter type={typeSelected} types={types} setTypes={handleSelectType} />
          </Box>
        }
        <Box>
          <ImageList variant="masonry" cols={3} gap={8}>
            {dataFilter.length > 0 && dataFilter.map((pokemon: any, index: number) => {
              return (
                <Card
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  types={pokemon.types}
                />
              )
            })}
            {dataFilter.length === 0 && pokemons && pokemons.map((pokemon: any, index: number) => {
              return (
                <Card
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  types={pokemon.types}
                />
              )
            })}
          </ImageList>
        </Box>
        {isLoading && <Skeleton items={[1,2,3]}/>}
      </Container>
    </main>
  )
}
