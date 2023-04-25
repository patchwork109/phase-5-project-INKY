import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {


    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/tattoos">Explore Tattoos</NavLink>
            <NavLink exact to="/wishlist">Wishlist</NavLink>
            <NavLink exact to="/ourstory">Our Story</NavLink>
        </div>
    )
}

export default NavBar;