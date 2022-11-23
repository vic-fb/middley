import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { Button, Heading, HStack, Image, VStack } from '@chakra-ui/react';

import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <VStack>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MRALgb4vgJEXZCN67pAWBgSjrfcqym0qQseIfSjmkugK-LQEol7QX95mSzcMVXm1QlY&usqp=CAU"
          alt="Globa with points"
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
