
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Body from './components/Body';
import Footer from './components/Footer';
import Header from "./components/Header";
import { Box, Drawer, Toolbar, Typography} from '@mui/material';
import SideBar from "./components/SideBar";
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      {/* <Box sx={{ display: 'flex' }}>
      
      <Body/>
      <Footer/>
      </Box> */}
      
    </BrowserRouter>
  );
};

export default App