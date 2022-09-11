import { createTheme } from '@mui/material/styles'

/**
 * Typography.
 */
export const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
}

/**
 * Create a theme light.
 */
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#48bb78',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },

  typography,
})

/**
 * Create a theme dark.
 */
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#48bb78',
    },
    background: {
      default: '#1a202c',
      paper: '#2d3748',
    },
  },

  typography,
})
