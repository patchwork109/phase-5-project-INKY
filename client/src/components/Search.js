import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/tattoopage";

function Search({searchedValue}) {

    const handleSearchInputChange = (e) => {
        searchedValue(e.target.value);
    }

    return (
        <ThemeProvider theme={theme}>
        <div>
            <Box sx={{ mt: 5, mr: 4, display: 'flex', justifyContent: "right" }}>
                <Paper sx={{ bgcolor: '#f6f3d9' }}>
                    <TextField
                            sx={{ width: '40ch' }}
                            // label="Search tattoos"
                            placeholder="Type a tattoo to search..."
                            onChange={handleSearchInputChange}
                        />
                </Paper>
            </Box>
        </div>
        </ThemeProvider>
    );
}

export default Search;