import { useDark } from '../../context'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import './SkeletonSelect.styles.scss'

const MAIN_CLASS = 'SkeletonSelect'
const DARK_CLASS = 'isDark';

function SkeletonSelectMock() {
  const { isDark } = useDark();
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <Grid className={className} container wrap="nowrap">
        <Box sx={{ width: 610, marginRight: 0.5, mb: 3 }}>
          <Skeleton variant="rectangular" width={500} height={100} />
        </Box>
      </Grid>
    </>
  );
}

export default SkeletonSelectMock;
