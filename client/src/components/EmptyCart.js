import React from "react";
import { Link } from 'react-router-dom';

function EmptyCart () {


    return (
        <div>
            Nothing to see here. Check out tattoos!
            <br/>
            <Link to="/tattoos">
                <button>Explore Tattoos</button>
            </Link>
        </div>
    )
}

export default EmptyCart;