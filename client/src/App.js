import React, { useState } from 'react';
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
  const [midpoint, setMidpoint] = useState('');
  const [activities, setActivities] = useState('');
  return (
    <ChakraProvider>
      <div className={styles.App}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalView />} />
          <Route path="/local" element={<Local setMidpoint={setMidpoint} />} />
          <Route
            path="/activities"
            element={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Activities
                setActivities={setActivities}
                midpointValue={midpoint}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/options"
            element={<Options activities={activities} />}
          />
          <Route path="/routes" element={<RoutesPage />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
