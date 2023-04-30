import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function NavBar ({user, onLogout}) {

    const handleLogoutClick = () => {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <NavLink className="navBar" exact to="/">Home</NavLink>
                        <NavLink className="navBar" exact to="/tattoos">Explore Tattoos</NavLink>
                        <NavLink className="navBar" exact to="/wishlist">Wishlist</NavLink>
                        <NavLink className="navBar" exact to="/ourstory">Our Story</NavLink>
                        <NavLink className="navBar" exact to="/cart">Cart</NavLink>
                        <NavLink className="navBar" exact to="/" onClick={handleLogoutClick}>{(user===null)? "":"Log Out"}</NavLink>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar;