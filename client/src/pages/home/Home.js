import { Link } from 'react-router-dom';
import {
  Box, Button, Heading, Image, VStack,
} from '@chakra-ui/react';
import appLogo from '../../common/assets/app-logo.png';
import styles from './Home.module.css';

function Home() {
  return (
    <Box>
      <VStack spacing={12}>
        <Image
          className={styles.logo}
          src={appLogo}
          alt="A map with two pins, each with an arrow pointing to a heart in the middle of the map."
        />
        <Heading as="h1" fontSize="5xl">
          Middley
        </Heading>
        <Button as={Link} to="/local" fontSize="xl" size="lg" variant="outline" border="4px">
          Get started!
        </Button>
      </VStack>
    </Box>
  );
}

export default Home;
