import React, { useState } from "react";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/system/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Form({addNewTattooToState}) {

    const [open, setOpen] = useState(false);
    const [tattooName, setTattooName] = useState("")
    const [tattooDescription, setTattooDescription] = useState("")
    const [tattooSize, setTattooSize] = useState("")
    const [tattooCategory, setTattooCategory] = useState("")
    const [tattooImage, setTattooImage] = useState("")

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        color: 'black',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
      };

    const handleClose = () => setOpen(false);

    const handleTattooNameChange = (e) => {
        setTattooName(e.target.value);
    }

    const handleTattooDescriptionChange = (e) => {
        setTattooDescription(e.target.value);
    }

    const handleTattooSizeChange = (e) => {
        setTattooSize(e.target.value);
    }

    const handleTattooCategoryChange = (e) => {
        setTattooCategory(e.target.value);
    }

    const handleTattooImageChange = (e) => {
        setTattooImage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setOpen(true);

        const newTattoo = {
            name: tattooName,
            description: tattooDescription,
            size: tattooSize, 
            category: tattooCategory,
            price: Math.floor(Math.random() * 12) + 3,
            image: tattooImage,
            is_custom: true
        }

        const handleNewTattooResponse = r => {
            if (r.ok) {
                console.log( "STATUS:", r.status)
                r.json().then(addNewTattooToState)
            } else {
                console.error("STATUS:", r.status)
                r.text().then(console.warn)
            }
        }
    
        fetch("/tattoos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newTattoo)
        })
        .then(r => handleNewTattooResponse(r))

        setTattooName("")
        setTattooDescription("")
        setTattooSize("")
        setTattooCategory("")
        setTattooImage("")
    }

    return (
        <div>
            <h3>Add a tattoo!</h3>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <FormGroup>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <TextField
                                    type="text"
                                    name="name"
                                    value={tattooName}
                                    label="Name"
                                    variant="outlined"
                                    placeholder="What should we call this tattoo?"
                                    onChange={handleTattooNameChange}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <TextField
                                    type="text"
                                    name="description"
                                    value={tattooDescription}
                                    label="Description"
                                    variant="outlined"
                                    placeholder="Describe the tattoo."
                                    onChange={handleTattooDescriptionChange}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <InputLabel>Size</InputLabel>
                                <Select
                                    value={tattooSize}
                                    label="Size"
                                    onChange={handleTattooSizeChange}
                                >
                                    <MenuItem value='Small'>Small</MenuItem>
                                    <MenuItem value='Medium'>Medium</MenuItem>
                                    <MenuItem value='Large'>Large</MenuItem>
                                </Select>       
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={tattooCategory}
                                    label="Category"
                                    onChange={handleTattooCategoryChange}
                                >
                                    <MenuItem value='Nature'>Nature</MenuItem>
                                    <MenuItem value='Animals'>Animals</MenuItem>
                                    <MenuItem value='Dinosaurs'>Dinosaurs</MenuItem>
                                    <MenuItem value='Objects'>Objects</MenuItem>
                                    <MenuItem value='Other'>Other</MenuItem>
                                </Select>       
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
                                <TextField
                                    type="text"
                                    name="image"
                                    value={tattooImage}
                                    label="Image"
                                    variant="outlined"
                                    placeholder="Enter an image URL."
                                    onChange={handleTattooImageChange}
                                />
                            </FormControl>
                            <Button sx={{ m: 1, width: '56ch' }} type="submit" variant="contained">Submit a New Tattoo</Button>
                        </FormGroup>
                    </Stack>
                </form>
            </Box>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CheckCircleIcon sx={{ fontSize: 80 }}/>
                    <br />
                    <h3>Thank you for contributing your tattoo design!</h3>
                    <p>Your tattoo will now be available to the INKY community.</p>
                </Box>
            </Modal>
        </div>
    );
}

export default Form;