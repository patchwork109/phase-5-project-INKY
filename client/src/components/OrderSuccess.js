import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/formtheme";

function OrderSuccess ({user}) {


    return (
        <ThemeProvider theme={theme}>
        <div>
            <Box sx={{ mt: 3, fontFamily: 'Roboto Mono', color: '#f6f3d9'}}>
                <CheckCircleIcon sx={{ fontSize: 100, color: '#1F8A70' }}/>
                <br />
                <h3>Thank you for your order, {user.name}!</h3>
                <p>You'll receive an email with order details shortly.</p>
                <br />
                <Link to="/tattoos">
                    <Button variant="contained">Explore Tattoos</Button>
                </Link>
            </Box>
        </div>
        </ThemeProvider>
    )
}

export default OrderSuccess;