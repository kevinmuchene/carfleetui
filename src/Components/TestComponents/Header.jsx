import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import Logo from './path_to_your_logo.svg';  // Replace this with your actual logo path

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo on the left side */}
                <IconButton edge="start" color="inherit" aria-label="logo">
                    <img alt="Logo" style={{ width: 50 }} />  {/* Adjust width as per your logo's dimensions */}
                </IconButton>

                {/* Title in the middle */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Your Title Here
                </Typography>

                {/* Logout button on the right side */}
                <Button color="inherit" onClick={() => {
                    // Handle logout logic here
                    console.log('Logging out...');
                }}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;