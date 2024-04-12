import React from 'react'
import LandingPage from './LandingPage';
import { seasons } from '../SampleData';
import { Box, Drawer, Toolbar} from '@mui/material';
import Footer from './Footer';
export default function SideBar() {
const drawerWidth = 240;
  return (
    <Box>
   
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
    ><Toolbar /><Box sx={{ overflow: 'auto' }}>
    {/* Render your component here */}
    <LandingPage treeItems={seasons} />
    
  </Box>
  
    </Drawer>
    <Toolbar/>
    <Footer/>
    </Box>
  )
}
