import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Search({searchedValue}) {

    const handleSearchInputChange = (e) => {
        searchedValue(e.target.value);
    }

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <TextField
                label="Search tattoos"
                placeholder="Type a tattoo to search..."
                onChange={handleSearchInputChange}
            />
            </Box>
        </div>
    );
}

export default Search;