import React from 'react';
import opencage from 'opencage-api-client';
import { useNavigate } from 'react-router-dom';
import './Local.css';
import { BsFillHouseDoorFill, BsFillBriefcaseFill } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input, Container, Button, Heading,
} from '@chakra-ui/react';


const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY; // the API key is stored in the .env file

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



function Local() {
  const nav = useNavigate();

  const [address1, setAddress1] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [midpoint, setMidpoint] = React.useState('');
  const [error, setError] = React.useState('');

  // calculate midpoint between two addresses
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response1 = await geocode(address1);
    const response2 = await geocode(address2);
    if (response1.ok && response2.ok) {

      const midlat = response1.data.latLng[0] + response2.data.latLng[0] / 2;  // create var midlat = lat1 + lat2 (from arrays) divided by 2
      console.log ('midlat', midlat); // print midlat to console
   
      const midlng = response1.data.latLng[1] + response2.data.latLng[1] / 2; // create var midlng = lng1 + lng2 (from arrays) divided by 2

      const midarr = [midlat, midlng]; // create array containing midlat and midlng

      setMidpoint(midarr); // return new array with both
      console.log('midpoint:', midpoint); 

      // for some reason the long and lat are not calculated correctly - the returned value is not correct
      
    } else {
      setError('Error calculating midpoint');
    }
  };

  const handleAddress1 = (e) => {
    setAddress1(e.target.value);
  }

  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
  }

  return (
    <Container>
      <Heading as="h1" size="2xl" mb="4">Find Midway Point</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="address1" isRequired>
          <FormLabel>Address 1</FormLabel>
          <Input
            type="text"
            placeholder="Enter address"
            value={address1}
            onChange={handleAddress1}
          />
        </FormControl>

        <div className="user-icons">
          <div className="home-icon" role="presentation">
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation" >
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation" >
            <HiOutlineLocationMarker />
          </div>

        </div>

        <br />
        
        <FormControl id="address2" isRequired>
          <FormLabel>Address 2</FormLabel>
          <Input
            type="text"
            placeholder="Enter address"
            value={address2}
            onChange={handleAddress2}
          />
        </FormControl>
        
        <div className="user-icons">
          <div className="home-icon" role="presentation">
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation" >
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation" >
            <HiOutlineLocationMarker />
          </div>

        </div>
     

          <Button type="submit" colorScheme="teal" mt="4">Submit</Button>
      </form>
      <div>
        <p>{midpoint}</p>
      </div>
    </Container>
  );
};

export default Local;