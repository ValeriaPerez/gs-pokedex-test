'use client'

import { useSearchParams } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'

import { useDark } from '../../context'
import { useFetchPokemonByID } from '../../hooks'
import { Header, Skeleton } from '../../components'


const MAIN_CLASS = 'main';
const DARK_CLASS = 'isDark';

export default function Page() {
  const {isDark, setIsDark} = useDark()
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const search = searchParams.get('name')

  const {data: pokemon, isLoading} = useFetchPokemonByID(search || '')

  console.log('pokemon', pokemon)

  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  const handleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={className}>
      <Header onClick={handleDarkMode} />
      <Container>
        { pokemon && 
          <Stack>
            <Typography gutterBottom sx={{ fontSize: 40, fontWeight: 800 }}>
              {pokemon.name} <span style={{fontSize: 40, fontWeight: 300}}>{pokemon.id}</span>
            </Typography>
          </Stack>
        }
        { isLoading && <Skeleton items={[1, 2]}/>}
      </Container>
    </div>
  )
}
