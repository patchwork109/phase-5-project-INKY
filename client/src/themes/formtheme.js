import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#a80a44',
          contrastText: '#f6f3d9',
          dark: '#Your button hover color',
        },
      },
  typography: {
    fontFamily: [
        'Roboto Mono',
        'sans-serif'
    ].join(','),

    fontSize: [
        20, 
    ].join(','),

    button: {
        textTransform: 'none',
        fontFamily: 'Calistoga',
      }
  },
});

export default theme;