import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { Button, Heading, HStack, Image, VStack } from '@chakra-ui/react';

import styles from './Home.module.css';
import MeetintheMiddle from '../../common/assets/App Logo/MeetintheMiddle.png';

function Home() {
  return (
    <div className={styles.Home}>
      <VStack>
        <Image
          className={styles.MeetintheMiddle}
          src={MeetintheMiddle}
          alt="A map with two pins emitting an arrow each. They are pointing to a heart in the middle of the map."
        />
        < br />
        < br />
        <Heading className={styles.MITMTitle} p={4} fontSize="5xl">
          MATES of the MIDDLE
        </Heading>
        < br />
        < br />
        <HStack>
          <Button
            size="lg"
            as={Link}
            to="/local"
            p={8}
            fontSize="2xl"
            colorScheme="linkedin"
            variant="outline"
          >
            LOCAL
          </Button>
          <Button
            size="lg"
            as={Link}
            to="/global"
            p={8}
            fontSize="2xl"
            colorScheme="linkedin"
            variant="outline"
          >
            GLOBAL
          </Button>
        </HStack>
      </VStack>
    </div>
  );
}

export default Home;
