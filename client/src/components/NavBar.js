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
        }).then(() => onLogout());
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <NavLink exact to="/">
                            <Button sx={{ color: "white" }}><strong>INKY</strong></Button>
                        </NavLink>
                        <NavLink exact to="/tattoos">
                            <Button sx={{ color: "white" }}>Explore Tattoos</Button>
                        </NavLink>
                        <NavLink exact to="/customtattoos">
                            <Button sx={{ color: "white" }}>Custom Tattoos</Button>
                        </NavLink>
                        <NavLink exact to="/ourstory">
                            <Button sx={{ color: "white", justifyContent: "right" }}>Our Story</Button>
                        </NavLink>
                        <Box flexGrow={1} />
                        <NavLink exact to="/wishlist">
                            <IconButton>
                                <FavoriteBorderIcon sx={{ color: "white", justifyContent: "right" }}/>
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/cart"> 
                            <IconButton>
                                <Badge color="error" badgeContent={count}>  
                                    <ShoppingCartIcon sx={{ color: "white", justifyContent: "right" }}/>
                                </Badge>
                            </IconButton>
                        </NavLink>
                        <NavLink exact to="/" onClick={handleLogoutClick}> 
                            {(user===null)? "" : <Button sx={{ color: "white", justifyContent: "right" }}>Log Out</Button>}
                        </NavLink>
                    </Toolbar>
                </AppBar>
            <Toolbar />
            </Box>
        </div>
    )
}

export default NavBar;