'use client'
import useTranslation from 'next-translate/useTranslation'
import { useDark } from '../../context'

const MAIN_CLASS = 'main';
const DARK_CLASS = 'isDark';

export default function Page() {
  const {isDark, setIsDark} = useDark()
  const { t } = useTranslation()

  const className: string = [
    MAIN_CLASS,
    isDark && `${DARK_CLASS}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <p>detalle</p>
    </div>
  )
}
