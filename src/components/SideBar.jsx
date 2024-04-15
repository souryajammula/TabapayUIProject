// import React from 'react'
// import LandingPage from './LandingPage';
// import { useState } from 'react';
// import { seasons } from '../SampleData';
// import { Box, Drawer, Toolbar, Typography} from '@mui/material';
// import Footer from './Footer';
// export default function SideBar({handleNodeSelect}) {
//   const drawerWidth = 240;


//   return (
    
//     <Box sx={{ display: 'flex' }}>
//     <Drawer
//     variant="permanent"
//     sx={{
//       width: drawerWidth,
//       flexShrink: 0,
//       [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', overflow:'auto' },
//     }}
//     >
//     <Toolbar />
//     <Box sx={{overflow: 'auto', height: 'calc(100vh - 64px)' }}>
//     {/* Render your component here */}
//     <LandingPage treeItems={seasons} onNodeSelect={handleNodeSelect}/>
    
//     </Box>
  
//     </Drawer>
//   </Box>
//   )
// }
import React from 'react';
import LandingPage from './LandingPage';
import { Box, Drawer, Toolbar } from '@mui/material';
import Footer from './Footer';
import { seasons } from '../SampleData';

const SideBar = ({ handleNodeSelect }) => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth,
            boxSizing: 'border-box',
            overflow: 'auto',
            // // Adjusting the width for different screen sizes
            // '@media (max-width: 600px)': {
            //   width: '50%', // Drawer occupies full width on small screens
            // },
            // '@media (min-width: 601px) and (max-width: 960px)': {
            //   width: drawerWidth * 0.8, // Drawer occupies 80% of width on medium screens
            // },
            // '@media (min-width: 961px)': {
            //   width: drawerWidth, // Drawer occupies standard width on large screens
            // },
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', height: 'calc(100vh - 64px - 56px)' }}>
          {/* Adjusted height to accommodate Footer */}
          <LandingPage onNodeSelect={handleNodeSelect} />
        </Box>
      </Drawer>
      <Footer />
    </Box>
  );
};

export default SideBar;
