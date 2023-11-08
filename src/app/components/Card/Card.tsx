import { useDark } from '../../context'
import CardMedia from '@mui/material/CardMedia'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import type { CardProps } from './Card.props'
import './Card.styles.scss'

const MAIN_CLASS = 'Card'
const DARK_CLASS = 'isDark';

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
  const { isDark } = useDark();
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`]
    .filter(Boolean)
    .join(' ');

  return (
    <ImageListItem className={className} onClick={onClick}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        // image={pokemon.sprites.other.dream_world.front_defaul}
        alt={name}
      />
      <ImageListItemBar position="below" title={id} />
      <ImageListItemBar position="below" title={name} />
      {attack}
      {defense}
      {movements}
      {skills}
    </ImageListItem>
  );
}

export default Card;
