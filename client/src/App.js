import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import theme from './brandTheme';
import UserProvider from './common/UserProvider';
import Home from './views/home/Home';
import Navbar from './common/components/navbar/Navbar';
import Signup from './views/signup/Signup';
import Login from './views/login/Login';
import Profile from './views/profile/Profile';
import styles from './App.module.css';
import Stepper from './views/stepper/Stepper';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Box as="header" className={styles.header} backgroundColor="black">
          <Navbar />
        </Box>
        <Flex className={styles.main} as="main" direction="column" marginX="auto" justify="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/main"
              element={<Stepper />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Routes>
        </Flex>
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
