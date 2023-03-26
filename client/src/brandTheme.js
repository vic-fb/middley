import { extendTheme } from '@chakra-ui/react';
import { StepsTheme as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  fonts: {
    heading: '"monaco", sans-serif',
    body: '"monaco", sans-serif',
  },
  components: {
    Steps,
  },
});

export default theme;
