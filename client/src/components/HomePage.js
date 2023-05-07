import React from "react";
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import whale from '../images/whale.png';
import lemon from '../images/lemon.png';
import dragonfly from '../images/dragonfly.png';
import palmtree from '../images/palmtree.png';
import turtle from '../images/turtle.png';
import earth from '../images/earth.png';

function HomePage () {


    return (
        <div>
            <h2>for now, not forever</h2>
            <ImageList sx={{ overflow: 'scroll' }} cols={6} rowHeight={264}>
                <ImageListItem>
                    <img
                        src={`${whale}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${whale}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="whale"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${lemon}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${lemon}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="lemon"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${dragonfly}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${dragonfly}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="dragonfly"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${palmtree}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${palmtree}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="palmtree"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${turtle}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${turtle}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="turtle"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${earth}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${earth}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="earth"
                        loading="lazy"
                    />
                </ImageListItem>
             </ImageList>
            <Box sx={{ bgcolor: '#cfe8fc', height: '30vh'}}>placeholder section for popular categories</Box>
            <br/>
            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
            <h4>placeholder section for featured reviews carousel</h4>
            <Link to="/tattoos">
                <Button variant="contained">Explore Tattoos</Button>
            </Link>
            <h4>Questions? We have answers.</h4>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography>How long does an INKY tattoo last?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our tattoos last 1-2 weeks. The length is highly dependent on 
                        where you apply your tattoo and your daily activities. Our ink 
                        gradually fades away as your skin naturally regenerates.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                <Typography>What tattoo sizes are available?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our tattoos come in Small 1 x 1", Medium 3 x 3", and Large 5 x 5" sizes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                <Typography>Where do you ship to?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nowhere...👀
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <br/>
        </div>
    )
}

export default HomePage;