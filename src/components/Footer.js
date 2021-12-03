import * as React from 'react'
import Box from '@mui/material/Box'

function Footer() {
  return (
    <Box
      component='div'
      sx={{
        fontFamily: 'Times New Roman',
        textAlign: 'center',
        color: '#646473'
      }}
      mt={1}
    >
      <p>&copy;Software Powered by Xtrategie</p>
      <p>2009 - 2021</p>
    </Box>
  )
}

export default Footer
