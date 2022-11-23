import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: '"Montserrat Alternates", sans-serif',
    body: '"Montserrat Alternates", sans-serif',
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#B0A1C7', // background color
    gray: {
      50: '#f7fafc',
      // ...
      500: '#5C5474', // button background
      800: '#45346E', // text color
    },

    // ...
  },
});

export default theme;
