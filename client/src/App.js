import React, { useEffect, useState } from 'react';
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
import Profile from './Pages/Profile/Profile';
import { getUserToken } from './common/helpers/localFunctions';
import { silentUserLogin } from './common/helpers/auth';
import { getUsers } from './common/helpers/users';

function App() {
  const [activities, setActivities] = useState('');
  const [midpoint, setMidpoint] = useState([]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      silentUserLogin(token)
        .then((response) => setUser(response.user));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const midpointArray = await getMidpoint(address1, address2);
    setMidpoint(midpointArray); // return new array with both
    nav('/activities'); // navigate to activities page with midpoint as prop
  };

  console.log(getUsers());

  return (
    <ChakraProvider>
      <div className={styles.App}>
        <Navbar setUser={setUser} user={user} />

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
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/options"
            element={activities && (
              <Options activities={activities} />)}
          />
          <Route path="/routes" element={<RoutesPage address1={address1} address2={address2} />} />
          <Route
            path="/profile"
            element={user && (
            <Profile user={user} />)}
          />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
