import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
// import Logo from './path_to_your_logo.svg';  // Replace this with your actual logo path

function Header() {
    const navigate = useNavigate();
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo on the left side */}
                <IconButton edge="start" color="inherit" aria-label="logo">
                    <img alt="Logo" style={{ width: 100 }} src='https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />  {/* Adjust width as per your logo's dimensions */}
                </IconButton>

                {/* Title in the middle */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Rental Car System
                </Typography>

                {/* Logout button on the right side */}
                <Button color="inherit" onClick={() => {
                    // Handle logout logic here
                    console.log('Logging out...');
                    navigate("/")
                }}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;