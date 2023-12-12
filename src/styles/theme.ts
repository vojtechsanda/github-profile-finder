import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1d1d1d',
    },
    text: {
      primary: '#fff',
      secondary: '#e3e3e3',
    },
    primary: {
      main: '#41F367',
      dark: '#00c734',
      light: '#a5faac',
    },
    secondary: {
      main: '#f341cc',
      dark: '#e000b3',
      light: '#fbb8e9',
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '0.25rem',
          padding: '0.75rem 1rem',
        },
      },
    },
  },
});
