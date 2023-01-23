import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Home from './pages/home/Home';
import Local from './pages/local/Local';
import Navbar from './common/components/Navbar/Navbar';
import Activities from './pages/activities/Activities';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Options from './pages/options/Options';
import RoutesPage from './pages/location/Location';
import { getMidpoint } from './common/helpers/geocode';
import Profile from './pages/profile/Profile';
import { getUserToken } from './common/helpers/localFunctions';
import { silentUserLogin } from './common/helpers/auth';
import theme from './brandTheme';

function App() {
  const [activities, setActivities] = useState('');
  const [midpoint, setMidpoint] = useState([]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [activity, setActivity] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      silentUserLogin(token).then((response) => setUser(response.user));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const midpointArray = await getMidpoint(address1, address2);
    setMidpoint(midpointArray); // return new array with both
    nav('/activities'); // navigate to activities page with midpoint as prop
  };

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor="mitmPurple.600" minH="100vh">
        <Navbar setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/local"
            element={(
              <Local
                setMidpoint={setMidpoint}
                setAddress1={setAddress1}
                setAddress2={setAddress2}
                handleSubmit={handleSubmit}
                address1={address1}
                address2={address2}
                user={user}
              />
            )}
          />
          <Route
            path="/activities"
            element={(
              <Activities
                setActivities={setActivities}
                midpointValue={midpoint}
                setLoading={setLoading}
              />
            )}
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/options"
            element={
              activities && (
                <Options
                  activities={activities}
                  setActivity={setActivity}
                  loading={loading}
                />
              )
            }
          />
          <Route
            path="/routes"
            element={(
              <RoutesPage
                address1={address1}
                address2={address2}
                activity={activity}
              />
            )}
          />
          <Route
            path="/profile"
            element={user
              && (
              <Profile
                user={user}
                setUser={setUser}
              />
              )}
          />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
