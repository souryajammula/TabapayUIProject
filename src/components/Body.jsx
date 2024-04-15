// import React from 'react'
// import { Box,Typography,Toolbar } from '@mui/material';
// import ShowContents from './ShowContents';


// export default function Body({selectedItem}) {
//   return (
//     <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#7b82dd' , overflow: 'auto', height: 'calc(100vh - 64px)'}}>
//     <Toolbar />
    
//       {selectedItem.name==null ? <ShowContents/> : 
//      <Typography variant="h6" >Welcome to {selectedItem.name} Page !! </Typography>
//      }
//      <ShowContents/>

//   </Box>
//   )
// }

import React from 'react'
import { Box,Typography,Toolbar } from '@mui/material';
import ShowContents from './ShowContents';


export default function Body({selectedItem}) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#7b82dd' , overflow: 'auto', height: 'calc(100vh - 64px)'}}>
    <Toolbar />
    
     
     <Typography variant="h6" fontWeight="bold" >{selectedItem.name} </Typography>

     {(selectedItem.name != null &&  selectedItem?.contents?.length != 0) ? <ShowContents selectedItem={selectedItem}/> : null}

  </Box>
  )
}
