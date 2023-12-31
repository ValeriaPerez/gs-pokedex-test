import React from 'react'
import { useDark } from '../../context'
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import type { FilterProps } from './Filter.props'

import './Filter.styles.scss'

const MAIN_CLASS = 'Filter'
const DARK_CLASS = 'isDark';

const Filter = ({ type, types, setTypes }: FilterProps ) => {
  const { isDark } = useDark();
  const className: string = [MAIN_CLASS, isDark && `${DARK_CLASS}`]
    .filter(Boolean)
    .join(' ')
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      className={className}
    >
      <FormControl variant='filled' sx={{ minWidth: 350 }}>
        <InputLabel>Busca por tipo</InputLabel>
        <Select
          value={type}
          onChange={(e) => setTypes(e.target.value)}
          label='Status'
        >
          {types.map((item) => {
            return (
              <MenuItem key={item.url} value={item.name}>
                {item.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Stack>
  )
}

export default Filter
