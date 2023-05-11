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
        'Bebas Neue',
        'sans-serif'
    ].join(','),

    fontSize: [
        18, 
    ].join(','),

    button: {
        textTransform: 'none',
        fontSize: 20,
        fontFamily: 'Calistoga',
      }
  },
});

export default theme;