import React from "react";
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function HomePageCarousel() {

    return (
        <Carousel sx={{ color: '#f6f3d9', fontFamily: 'Roboto Mono', justifyContent: 'center'}}>
            <Box sx={{ mr: 15, ml: 15 }}>
                <p>"I was blown away by the quality! The tattoos were easy to apply and lasted for several days without any fading or smudging. The designs were super cute and I received so many compliments while wearing them. I will definitely be purchasing more in the future!"</p>
                <Rating name="read-only" value={5} readOnly />
                <br/>
                <br/>
            </Box>
            <Box sx={{ mr: 15, ml: 15 }}>
                <p>"I was hesitant to try temporary tattoos, but I am so glad I did! The tattoos I purchased were a variety of designs and sizes, which was perfect for trying out different looks. I love how they allowed me to experiment with different styles without committing to a permanent tattoo."</p>
                <Rating name="read-only" value={5} readOnly />
                <br/>
                <br/>
            </Box>
            <Box sx={{ mr: 15, ml: 15 }}>
                <p>"I ordered some temporary tattoos for a party and they were a hit! Everyone loved the designs and they were a fun addition to our outfits. The tattoos were easy to apply and lasted throughout the entire night without any issues. I will be ordering more for future events!"</p>
                <Rating name="read-only" value={5} readOnly />
                <br/>
                <br/>
            </Box>
        </Carousel>

    );
}

export default HomePageCarousel;