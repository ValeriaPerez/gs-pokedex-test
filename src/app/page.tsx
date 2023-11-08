'use client'
import Container from '@mui/material/Container'
import { useDark } from './context'
import useFetchPokemons from './hooks/useFetchPokemons'
import { Header, Skeleton, Card } from './components'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'

const MAIN_CLASS = 'main';
const DARK_CLASS = 'isDark';

export default function Home() {
  const {isDark, setIsDark} = useDark()
  const {data: pokemons, isLoading} = useFetchPokemons()

  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  const handleDarkMode = () => {
    setIsDark(!isDark);
  }

  console.log(pokemons)

  return (
    <main className={className}>
      <Header onClick={handleDarkMode} />
      <Container>
        <Box>
          <ImageList variant="masonry" cols={3} gap={8}>
            {pokemons && pokemons.map((pokemon: any, index: number) => {
              return (
                <Card
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                />
              )
            })}
          </ImageList>
        </Box>
        {isLoading && <Skeleton />}
      </Container>
    </main>
  )
}
