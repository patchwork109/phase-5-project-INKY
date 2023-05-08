import React from "react";
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Paper } from "@mui/material";

function HomePageCarousel() {

    return (
        <Carousel >
            <Box>
                {/* <Paper sx={{ width: 200 }}> */}
                <h4>Review 1</h4>
                <p>This tattoo is great!</p>
                <Rating name="read-only" value={5} readOnly />
                <br/>
                <br/>
                {/* </Paper> */}
            </Box>
            <Box>
                <h4>Review 2</h4>
                <p>Looove this for me</p>
                <Rating name="read-only" value={5} readOnly />
                <br/>
                <br/>
            </Box>
            <Box>
                <h4>Review 3</h4>
                <p>So fab</p>
                <Rating name="read-only" value={5} readOnly />
                <br/>
                <br/>
            </Box>
        </Carousel>

    );
}

export default HomePageCarousel;