import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        <div>
            <Box sx={{ maxWidth: 200, width: 200, ml: 8, mt: 3 }}>
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
    );
}

export default Sort;