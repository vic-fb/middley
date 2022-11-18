
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import opencage from 'opencage-api-client';
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

const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY; // the API key is stored in the .env file

function App() {

  const [activities, setActivities] = useState('');
  const [midpoint, setMidpoint] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const nav = useNavigate();

  async function geocode(address) {
    const geoParams = {
      q: address,
      key: OCD_API_KEY,
      no_annotations: 1,
    };

    const myresponse = {
      ok: false, data: null, status: 0, error: '',
    };
    try {
      // OC sends response in JSON, API takes care of parsing etc.
      const response = await opencage.geocode(geoParams);
      if (response.status.code === 200) {
        if (response.results.length > 0) {
          myresponse.ok = true;
          const g = response.results[0].geometry;
          myresponse.data = {
            latLng: [g.lat, g.lng],
            formatted_address: response.results[0].formatted,
          };
        } else {
          myresponse.status = 404;
          myresponse.error = 'Address not found';
        }
      } else {
        myresponse.status = response.status.code;
        myresponse.error = response.status.text;
      }
    } catch (err) {
      myresponse.error = err.message;
    }

    console.log('geocode myresponse:', myresponse);

    return myresponse;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response1 = await geocode(address1);
    const response2 = await geocode(address2);
    if (response1.ok && response2.ok) {
      const midlat = (response1.data.latLng[0] + response2.data.latLng[0]) / 2;
      // create var midlat = lat1 + lat2 (from arrays) divided by 2
      console.log('midlat', midlat); // print midlat to console

      const midlng = (response1.data.latLng[1] + response2.data.latLng[1]) / 2;
      // create var midlng = lng1 + lng2 (from arrays) divided by 2
      console.log('midlng', midlng);
      const midarr = [midlat, midlng]; // create array containing midlat and midlng

      setMidpoint(midarr); // return new array with both

      nav('/activities'); // navigate to activities page with midpoint as prop
    } else {
      // setError('Error calculating midpoint');
    }
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
          <Route path="/routes" element={<RoutesPage address1={address1} address2={address2} />} />

        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
