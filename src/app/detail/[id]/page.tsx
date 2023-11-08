'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'

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
  const [infoPokemon, setInfoPokemon] = useState([])

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

  useEffect(() => {
    async function getDetaiilAttackAndDefense() {
      let newInfo: any = []
      if (pokemon) {
        await pokemon?.stats?.map((stat: any) => {
          if (stat.stat.name === 'attack' || stat.stat.name === 'defense') {
            newInfo.push(stat);
          }
        })

        setInfoPokemon(newInfo)
      }
    }

    getDetaiilAttackAndDefense()
  }, [pokemon])


  console.log('infoPokemon', infoPokemon)

  return (
    <div className={className}>
      <Header onClick={handleDarkMode} />
      <Container>
        { pokemon &&
          <Stack>
            <CardMedia
              sx={{objectFit: 'contain'}}
              component='img'
              height='500'
              width='300'
              image={pokemon.sprites?.other.dream_world.front_default}
            />
            <Stack>
              <Typography gutterBottom sx={{ fontSize: 40, fontWeight: 800, textTransform: 'uppercase'}}>
                {pokemon.name}  - <span style={{fontSize: 40, fontWeight: 300}}>#{pokemon.id}</span>
              </Typography>
              {infoPokemon.map((item: any, index) => {
                return (
                  <div key={index}>
                    <Typography component="legend">{item?.stat.name}</Typography>
                    <Rating readOnly name="customized-10" defaultValue={(item.base_stat) / 100 * 10} precision={0.5} max={10}/>
                  </div>
                )
              })}
            </Stack>
          </Stack>
        }
        { isLoading && <Skeleton items={[1, 2]}/>}
      </Container>
    </div>
  )
}
