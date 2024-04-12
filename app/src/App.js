
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <SideBar />
    </BrowserRouter>
  );
};

export default App