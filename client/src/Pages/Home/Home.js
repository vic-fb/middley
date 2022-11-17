import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <VStack>
        <HStack>
          <Heading className={styles.MITMTitle}>Meet in the Middle </Heading>
        </HStack>
        <Link to="/local">Local</Link>
        <Link to="/global">Global</Link>
      </VStack>
    </div>
  );
}

export default Home;
