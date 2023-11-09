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
          image={'https://miro.medium.com/v2/resize:fit:4000/1*Zaty9dpItL2UsDofl3Cj0g.png'}
        />
      </Link>
      <div>
        <SwitchComponent onClick={onClick} isDark={isDark} />
      </div>
    </div>
  )
}

export default Header;
