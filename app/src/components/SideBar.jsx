import React from 'react'
import LandingPage from './LandingPage';
import { useState } from 'react';
import { seasons } from '../SampleData';
import { Box, Drawer, Toolbar, Typography} from '@mui/material';
import Footer from './Footer';
export default function SideBar() {
  const drawerWidth = 240;
  const [selectedItem, setSelectedItem] = useState({});

  const handleNodeSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    
    <Box sx={{ display: 'flex' }}>
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
    ><Toolbar /><Box sx={{ overflow: 'auto' }}>
    {/* Render your component here */}
    <LandingPage treeItems={seasons} onNodeSelect={handleNodeSelect}/>
    
    </Box>
  
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Toolbar />
    <Typography paragraph>
     Welcome {selectedItem.name}
    </Typography>
  </Box>
    <Footer/>
    </Box>
  )
}
