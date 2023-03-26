import { Link } from 'react-router-dom';
import {
  Box, Button, Heading, Image, VStack, Container,
} from '@chakra-ui/react';
import appLogo from '../../common/assets/app-logo.png';
import styles from './Home.module.css';

function Home() {
  return (
    <Container>
      <VStack spacing={12}>
        <Box textAlign="center">
          <Heading as="h1" fontSize="5xl">
            middley
          </Heading>
          <Heading as="h2" fontSize="xl">
            just meet in the middle
          </Heading>
        </Box>
        <Image
          className={styles.logo}
          src={appLogo}
          alt="A map with two pins, each with an arrow pointing to a heart in the middle of the map."
        />
        <Button as={Link} to="/main" fontSize="xl" size="lg" variant="outline" border="4px" borderColor="black">
          Get started!
        </Button>
      </VStack>
    </Container>
  );
}

export default Home;
