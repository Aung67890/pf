import { Box,useTheme } from '@mui/material'
import React from 'react'

export default function Footer() {

    const theme = useTheme()

  return (
    <Box sx={{width:"100%",height:"5vh",backgroundColor:theme.palette.background.default,color:theme.palette.text.primary,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h5 style={{margin:"30px 0"}}>© 2022 Aung Myat Thu. All Rights Reserved.</h5>
    </Box>
  )
}
