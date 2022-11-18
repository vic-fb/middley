import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import styles from './App.module.css';
import Home from './Pages/Home/Home';
import Local from './Pages/Local/Local';
import GlobalView from './Pages/GlobalView/GlobalView';
import Navbar from './common/components/Navbar/Navbar';
import Activities from './Pages/Activities/Activities';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Options from './Pages/Options/Options';
import RoutesPage from './Pages/RoutesPage/RoutesPage';

function App() {
  const [midpoint, setMidpoint] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  return (
    <ChakraProvider>
      <div className={styles.App}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalView />} />
          <Route path="/local" element={<Local setMidpoint= {setMidpoint} setAdress1= {setAddress1} setAdress2= {setAddress2} />} />
          <Route path="/activities" element={<Activities midpointValue= {midpoint} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/options" element={<Options />} />
          <Route path="/routes" element={<RoutesPage address1= {address1} address2= {address2} />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
