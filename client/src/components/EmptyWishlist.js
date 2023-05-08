import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function EmptyWishlist () {


    return (
        <div>
            Your Wishlist is empty. Check out tattoos!
            <br/>
            <br/>
            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
        </div>
    )
}

export default EmptyWishlist;