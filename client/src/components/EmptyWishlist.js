import React from "react";
import { Link } from 'react-router-dom';

function EmptyWishlist () {


    return (
        <div>
            Your Wishlist is empty. Check out tattoos!
            <br/>
            <Link to="/tattoos">
                <button>Explore Tattoos</button>
            </Link>
        </div>
    )
}

export default EmptyWishlist;