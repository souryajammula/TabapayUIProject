

import * as React from "react";
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from '../logo.png';

export default function Header() {
	return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{backgroundColor: '#120880'}}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" noWrap component="div"  sx={{backgroundColor: '#120880',textAlign: 'center', width: '100%' }}>
            UI Project
          </Typography>
        </Toolbar>
      </AppBar>
	);
}
