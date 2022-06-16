import { Box, useTheme } from '@mui/material'
import React from 'react'

export default function UnderLined() {

    const theme = useTheme()

  return (
    <Box sx={{width:"150px",height:"5px",backgroundColor:theme.palette.primary.main}}>

    </Box>
  )
}
