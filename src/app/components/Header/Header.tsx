import { useDark } from '../../context'
import { SwitchComponent } from '../../components'
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
      <h6 className='Header__title'>Pokedex</h6>
      <div>
        <SwitchComponent onClick={onClick} isDark={isDark} />
      </div>
    </div>
  )
}

export default Header;
