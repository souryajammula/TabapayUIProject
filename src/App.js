
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Body from './components/Body';
import Footer from './components/Footer';
import Header from "./components/Header";
import { Box, Drawer, Toolbar, Typography} from '@mui/material';
import { useState } from 'react';
import SideBar from "./components/SideBar";
import MenuDialog from './components/MenuDialog';
const App = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const menuDialogKey = selectedItem.id || null;
  const handleNodeSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
      <SideBar handleNodeSelect={handleNodeSelect}/>
      {(selectedItem.name != null) ? <MenuDialog key={menuDialogKey} selectedItem={selectedItem} /> : null}
      <Body selectedItem={selectedItem}/>
      
      <Footer/>
      </Box>
      
    </>
  );
};

export default App