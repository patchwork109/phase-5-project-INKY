import React from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';

function OrderSuccess ({user}) {


    return (
        <div>
            <Box sx={{ mt: 3}}>
                <CheckCircleIcon sx={{ fontSize: 100 }}/>
                <br />
                <h3>Thank you for your order, {user.name}!</h3>
                <p>You'll receive an email with order details shortly.</p>
                <br />
                <Link to="/tattoos">
                    <Button variant="contained">Explore Tattoos</Button>
                </Link>
            </Box>
        </div>
    )
}

export default OrderSuccess;