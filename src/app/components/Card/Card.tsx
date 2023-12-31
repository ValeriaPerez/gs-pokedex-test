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
        image={image ? image : 'data:image/png;base64,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'}
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
