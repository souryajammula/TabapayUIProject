import React from 'react'
import { Box,Typography,Toolbar } from '@mui/material';

export default function Body() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Typography paragraph>
     Welcome
    </Typography>
  </Box>
  )
}
