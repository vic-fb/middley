import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import getMidpoint from './common/helpers/geocode';

function App() {
  const [activities, setActivities] = useState('');
  const [midpoint, setMidpoint] = useState([]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const midpointArray = await getMidpoint(address1, address2);
    setMidpoint(midpointArray); // return new array with both
    nav('/activities'); // navigate to activities page with midpoint as prop
  };

  return (
    <ChakraProvider>
      <div className={styles.App}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalView />} />

          <Route path="/local" element={<Local setMidpoint={setMidpoint} setAddress1={setAddress1} setAddress2={setAddress2} handleSubmit={handleSubmit} address1={address1} address2={address2} />} />
          <Route
            path="/activities"
            element={(
              <Activities
                setActivities={setActivities}
                midpointValue={midpoint}
              />
            )}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/options"
            element={activities && (
              <Options activities={activities} />)}
          />
          <Route path="/routes" element={<RoutesPage address1={address1} address2={address2} />} />

        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
