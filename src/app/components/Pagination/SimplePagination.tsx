import { useDark } from '../../context'
import {
  Button,
  Stack,
  Typography,
} from '@mui/material'
import type { SimplePaginationProps } from './SimplePagination.props'
import './SimplePagination.styles.scss'

const MAIN_CLASS = 'SimplePagination'
const DARK_CLASS = 'isDark'

const SimplePagination = ({
  next,
  page,
  prev,
  isPrev,
  isNext,
}: SimplePaginationProps ) => {
  const { isDark } = useDark()
  const className: string = [MAIN_CLASS, isDark && ` ${DARK_CLASS}`]
    .filter(Boolean)
    .join('')

    console.log(isNext)
    console.log(isPrev)
  return (
    <div className={className}>
      <Stack
        mt={4}
        mb={4}
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={5}
      >
        <Button disabled={!isPrev || page === 1} onClick={prev} variant='outlined'>Anterior</Button>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          pagina: <strong>{page}</strong>
        </Typography>
        <Button disabled={!isNext} onClick={next} variant='outlined'>Siguiente</Button>
      </Stack>
    </div>
  )
}

export default SimplePagination