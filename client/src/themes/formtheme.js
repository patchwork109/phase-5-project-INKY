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
        16, 
    ].join(','),

    button: {
        textTransform: 'none',
        fontFamily: 'Calistoga',
        fontSize: 22,
        main: '#a80a44',
        contrastText: '#f6f3d9',
      }
  },
});

export default theme;