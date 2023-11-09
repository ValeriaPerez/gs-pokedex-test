'use client'
import Container from '@mui/material/Container'
import { useDark } from './context'
import { useFetchPokemons, useFetchTypes } from './hooks'
import { Header, Skeleton, SkeletonSelect, Card, Filter, SimplePagination } from './components'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react'

const MAIN_CLASS = 'main';
const DARK_CLASS = 'isDark';

export default function Home() {
  const [page, setPage] = useState(1)
  const [typeSelected, setTypeSelected] = useState<string>('')
  const [dataFilter, setDataFilter] = useState<any>([])
  const {isDark, setIsDark} = useDark()
  const {data: pokemons, isLoading, prev, next} = useFetchPokemons(page)
  const {data: types, isLoading: isLoadingType} = useFetchTypes()

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

  const handleChangePage = (action: string) => {
    if (action === 'next') {
      setPage(page + 1);
    }
    if (action === 'prev') {
      setPage(page - 1);
    }
  };

  return (
    <main className={className}>
      <Header onClick={handleDarkMode} />
      <Container>
        <Box justifyContent='center' mb={4} mt={4}>
          { isLoadingType && <SkeletonSelect /> }
          { !isLoadingType && types && <Filter type={typeSelected} types={types} setTypes={handleSelectType} /> }
        </Box>
        {isLoading ? <Skeleton items={[1,2,3]} /> : 
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 1, md: 3 }}>
              {dataFilter.length > 0 && dataFilter.map((pokemon: any, index: number) => {
                return (
                  <Grid item xs={1} sm={1} md={1} key={index}>
                    <Card
                      key={index}
                      id={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.sprites.other.dream_world.front_default}
                      types={pokemon.types}
                    />
                  </Grid>
                )
              })}
              {dataFilter.length === 0 && pokemons && pokemons.map((pokemon: any, index: number) => {
                return (
                  <Grid item xs={1} sm={1} md={1} key={index}>
                    <Card
                      key={index}
                      id={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.sprites.other.dream_world.front_default}
                      types={pokemon.types}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        }
        <SimplePagination
          page={page}
          next={() => handleChangePage('next')}
          prev={() => handleChangePage('prev')}
          isPrev={prev}
          isNext={next} />
      </Container>
    </main>
  )
}
