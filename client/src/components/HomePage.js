import React from "react";
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function HomePage () {


    return (
        <div>
            <h2>for now, not forever</h2>
            <h4>placeholder section for images</h4>
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