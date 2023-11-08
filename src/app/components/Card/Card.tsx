import Link from 'next/link'
import { useDark } from '../../context'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import ImageListItem from '@mui/material/ImageListItem'
import type { CardProps } from './Card.props'
import './Card.styles.scss'

const MAIN_CLASS = 'Card'
const DARK_CLASS = 'isDark'

function Card({
  name = 'card',
  onClick,
  attack = 'attack',
  defense = 'defense',
  movements = 'movements',
  skills= ['attack', 'defense'],
  image,
  types,
  id,
}: CardProps) {
  const { isDark } = useDark()
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`]
    .filter(Boolean)
    .join(' ')

  return (
    <ImageListItem className={className} onClick={onClick}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
      />
      <Stack spacing={2} className={`Card__description Card__description--${types && types[0].type.name}`}>
        <Typography gutterBottom sx={{ fontSize: 14, fontWeight: 800 }}>
          {id}
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 20, fontWeight: 800, textTransform: 'uppercase'}}>
          {name}
        </Typography>
        <Typography component='span' gutterBottom sx={{ fontSize: 14, fontWeight: 300,}}>
          {types && types.map(type => type.type.name + ' ')}
        </Typography>
        <Stack
          alignItems='end'
          direction='column'
          justifyContent='center'>
          <Link href={`/detail/${name}?name=${name}`}>Ver detalle</Link>
        </Stack>
      </Stack>
    </ImageListItem>
  )
}

export default Card
