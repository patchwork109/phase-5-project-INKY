import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/formtheme";

function EmptyCart () {


    return (
        <ThemeProvider theme={theme}>
        <div>
        <h2 style={{ color: '#f6f3d9', fontFamily: 'Roboto Mono', fontSize: 30, marginTop: 50}}>Nothing to see here. Check out tattoos!</h2>
            <br/>
            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
        </div>
        </ThemeProvider>
    )
}

export default EmptyCart;