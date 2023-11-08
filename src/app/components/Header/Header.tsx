import Link from 'next/link'
import { useDark } from '../../context'
import { SwitchComponent } from '../../components'
import CardMedia from '@mui/material/CardMedia'
import type { HeaderProps } from './Header.props'

import './Header.styles.scss'

const MAIN_CLASS = 'Header'
const DARK_CLASS = 'isDark'

const Header = ({
  onClick,
}: HeaderProps) => {
  const { isDark } = useDark()
  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      <Link href='/'>
        <CardMedia
          component='img'
          height='50'
          width='300'
          image={'https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'}
        />
      </Link>
      <div>
        <SwitchComponent onClick={onClick} isDark={isDark} />
      </div>
    </div>
  )
}

export default Header;
