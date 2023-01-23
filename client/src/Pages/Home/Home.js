import { Link } from 'react-router-dom';
import {
  Button, Heading, HStack, Image, VStack,
} from '@chakra-ui/react';
import appLogo from '../../common/assets/appLogo.png';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <VStack>
        <Image
          className={styles.MeetintheMiddle}
          src={appLogo}
          alt="A map with two pins, each with an arrow pointing to a heart in the middle of the map."
        />
        <br />
        <br />
        <Heading className={styles.MITMTitle} p={4} fontSize="5xl">
          Middley
        </Heading>
        <br />
        <br />
        <HStack>
          <Button size="lg" as={Link} to="/local" p={8} fontSize="1xl">
            Get started!
          </Button>
        </HStack>
      </VStack>
    </div>
  );
}

export default Home;
