import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function EmptyCart () {


    return (
        <div>
            Nothing to see here. Check out tattoos!
            <br/>
            <br/>
            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
        </div>
    )
}

export default EmptyCart;