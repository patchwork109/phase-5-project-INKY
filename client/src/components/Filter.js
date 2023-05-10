import React from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

function Filter({handleCategoryInputChange, handleSizeInputChange}) {
    

    return (
        <div>
            <Box sx={{ display: 'flex', width: 200, ml: 6, mt: 2 }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Choose a category:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleCategoryInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Nature"
                            />} 
                            label="Nature"
                        />
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleCategoryInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Dinosaurs"
                            />} 
                            label="Dinosaurs"
                        />
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleCategoryInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Animals"
                            />} 
                            label="Animals"
                        />            
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleCategoryInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Objects"
                            />} 
                            label="Objects"
                        />             
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleCategoryInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Other"
                            />} 
                            label="Other"
                        />            
                    </FormGroup>
                </FormControl>
            </Box>

            <Box sx={{ display: 'flex', width: 200, ml: 6 }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Choose a size:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleSizeInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Small"
                            />} 
                            label="Small"
                        />
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleSizeInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Medium"
                            />} 
                            label="Medium"
                        />
                        <FormControlLabel control={
                            <Checkbox 
                                onChange={handleSizeInputChange} 
                                inputProps={{ 'aria-label': 'controlled' }}
                                value="Large"
                            />} 
                            label="Large"
                        />             
                    </FormGroup>
                </FormControl>
            </Box>
        </div>
    );
}

export default Filter;