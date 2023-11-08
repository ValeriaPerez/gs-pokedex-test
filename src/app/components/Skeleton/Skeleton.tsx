import { useDark } from '../../context'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import type { SkeletonProps } from './Skeleton.props'

import './Skeleton.styles.scss'

const MAIN_CLASS = 'Skeleton'
const DARK_CLASS = 'isDark';

function SkeletonMock({items}: SkeletonProps) {
  const { isDark } = useDark();
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <Grid className={className} container wrap="nowrap">
        {items.map((item) => (
          <Box key={item} sx={{ width: 610, marginRight: 0.5, mb: 3 }}>
            <Skeleton variant="rectangular" width={310} height={318} />
          </Box>
        ))}
      </Grid>
      <Grid className={className} container wrap="nowrap">
        {items.map((item) => (
          <Box key={item} sx={{ width: 610, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={318} />
          </Box>
        ))}
      </Grid>
      <Grid className={className} container wrap="nowrap">
        {items.map((item) => (
          <Box key={item} sx={{ width: 610, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={318} />
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default SkeletonMock;
