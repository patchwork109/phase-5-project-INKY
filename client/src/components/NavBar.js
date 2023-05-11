import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';

function NavBar ({user, onLogout, count}) {

    const handleLogoutClick = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout())
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ bgcolor: '#E14D2A' }}>
                    <Toolbar>
                        <NavLink exact to="/">
                            <Button sx={{ color: '#f6f3d9', fontFamily: 'Pirata One', fontSize: 50, mt: -2, mb: -2 }}><strong>INKY</strong></Button>
                        </NavLink>
                        <NavLink exact to="/tattoos">
                            <Button sx={{ color: '#f6f3d9', fontFamily: 'Bebas Neue', fontSize: 22 }}>Explore Tattoos</Button>
                        </NavLink>
                        <NavLink exact to="/customtattoos">
                            <Button sx={{ color: '#f6f3d9', fontFamily: 'Bebas Neue', fontSize: 22 }}>Custom Tattoos</Button>
                        </NavLink>
                        <NavLink exact to="/ourstory">
                            <Button sx={{ color: '#f6f3d9', justifyContent: "right", fontFamily: 'Bebas Neue', fontSize: 22 }}>Our Story</Button>
                        </NavLink>
                        <Box flexGrow={1} />
                        <NavLink exact to="/wishlist">
                            <IconButton>
                                <FavoriteBorderIcon sx={{ color: '#f6f3d9', justifyContent: "right", fontSize: 28 }}/>
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/cart"> 
                            <IconButton>
                                <Badge color="success" badgeContent={count}>  
                                    <ShoppingCartIcon sx={{ color: '#f6f3d9', justifyContent: "right", fontSize: 28 }}/>
                                </Badge>
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/" onClick={handleLogoutClick}> 
                            {(user===null)? "" : <Button sx={{ color: '#f6f3d9', justifyContent: "right", fontFamily: 'Bebas Neue', fontSize: 22 }}>Log Out</Button>}
                        </NavLink>
                    </Toolbar>
                </AppBar>
            <Toolbar />
            </Box>
        </div>
    )
}

export default NavBar;