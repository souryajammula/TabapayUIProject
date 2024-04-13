import React from 'react'
import { Box,Typography,Toolbar } from '@mui/material';

export default function Body({selectedItem}) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#7b82dd' , overflow: 'auto', height: 'calc(100vh - 64px)'}}>
    <Toolbar />
    
      {selectedItem.name==null ? <Typography variant="h6" >Welcome to Homepage</Typography> : 
     <Typography variant="h6" >Welcome to {selectedItem.name} Page !! </Typography>}
    
  </Box>
  )
}
