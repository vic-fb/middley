import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // makes sure when a phone or laptop is in dark mode, colour is affected
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"monaco", sans-serif',
    body: '"monaco", sans-serif',
  },
  colors: {
    // transparent: 'transparent',
    // black: '#000',
    // white: '#51367D', // background color
    // grey: {
    //   50: '#f7fafc',
    //   // ...
    //   500: '#5C5474', // button background

    //   800: '#FFFFFF', // text color
    // },

    // ...
    mitmPurple: {
      50: '#B0A1C7',
      100: '#5C5474',
      200: '#5C5474',
      300: '#5C5474',
      400: '#5C5474',
      500: '#5C5474',
      600: '#51367D',
      700: '#51367D',
      800: '#51367D',
    },
  },
  components: {
    Button: defineStyleConfig({
      variants: {
        solid: {
          color: 'white',
          backgroundColor: 'mitmPurple.500',
          _hover: {
            color: 'white',
            backgroundColor: 'mitmPurple.500',
          },
        },
      },
    }),
    Input: defineStyleConfig({
      variants: {
        outline: {
          color: 'black',
          background: 'mitmPurple.50',
        },
      },
    }),
    Heading: defineStyleConfig({
      baseStyle: {
        color: '#DCDCDC',
      },
    }),
    Text: defineStyleConfig({
      baseStyle: {
        color: '#DCDCDC',
      },
    }),
    FormLabel: defineStyleConfig({
      baseStyle: {
        color: '#DCDCDC',
      },
    }),
  },
});

export default theme;
