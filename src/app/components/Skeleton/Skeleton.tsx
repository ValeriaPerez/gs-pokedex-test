import { useDark } from '../../context'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import './Skeleton.styles.scss'

const MAIN_CLASS = 'Skeleton'
const DARK_CLASS = 'isDark';

function SkeletonMock() {
  const mockData = [1,2,3]
  const { isDark } = useDark();
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <Grid className={className} container wrap="nowrap">
        {mockData.map((item, index) => (
          <Box key={index} sx={{ width: 610, marginRight: 0.5, mb: 3 }}>
            <Skeleton variant="rectangular" width={310} height={318} />
          </Box>
        ))}
      </Grid>
      <Grid className={className} container wrap="nowrap">
        {mockData.map((item, index) => (
          <Box key={index} sx={{ width: 610, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={318} />
          </Box>
        ))}
      </Grid>
      <Grid className={className} container wrap="nowrap">
        {mockData.map((item, index) => (
          <Box key={index} sx={{ width: 610, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={310} height={318} />
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default SkeletonMock;
