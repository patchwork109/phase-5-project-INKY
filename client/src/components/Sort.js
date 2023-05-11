import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/tattoopage";

function Sort({sortData, sortOrder, setSortOrder}) {

    const toggleSortOrder = () => {
    
        sortData()

        if (sortOrder === 'asc') {
            setSortOrder('desc');
        } else {
            setSortOrder('asc');
        }

        console.log("What is the sort order?", sortOrder);
    }

    return (
        <ThemeProvider theme={theme}>
        <div>
            <Box sx={{ maxWidth: 200, width: 200, ml: 3, mt: 1, mb: 4 }}>
                <FormControl fullWidth>
                    <InputLabel>Sort:</InputLabel>
                    <Select
                        value={sortOrder}
                        label="Sort"
                        onChange={toggleSortOrder}
                    >
                        <MenuItem value='desc'>Price: Low to High</MenuItem>
                        <MenuItem value='asc'>Price: High to Low</MenuItem>
                    </Select>       
                </FormControl>
            </Box>
        </div>
        </ThemeProvider>
    );
}

export default Sort;