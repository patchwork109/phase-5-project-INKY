import React from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/tattoopage";

function Filter({handleCategoryInputChange, handleSizeInputChange}) {
    

    return (
        <ThemeProvider theme={theme}>
        <div>
            <Box sx={{ display: 'flex', width: 200, ml: 2, mt: 1 }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel sx={{ fontFamily: 'Bebas Neue', fontSize: 24, color: '#a80a44'}} component="legend">Choose a category:</FormLabel>
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

            <Box sx={{ display: 'flex', width: 200, ml: 2, mt: -2 }}>
                <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel sx={{ fontFamily: 'Bebas Neue', fontSize: 24, color: '#a80a44'}} component="legend">Choose a size:</FormLabel>
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
        </ThemeProvider>
    );
}

export default Filter;