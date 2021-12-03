import * as React from 'react'
import Box from '@mui/material/Box'

function VSeparator() {
  return (
    <Box
      component='div'
      sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
      style={{
        width: '0px',
        height: '55vh',
        borderRight: 'solid 1px #ccc'
      }}
    ></Box>
  )
}

export default VSeparator
