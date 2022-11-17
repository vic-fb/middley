import React from 'react';
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

function Local() {
  const nav = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    nav('/Options');
    console.log('clicked');
  };

  return (
    <Container>
      <Heading as="h2">LOCATION 1</Heading>
      <form>
        <FormControl isRequired>
          <FormLabel>ADRESS</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>POSTAL CODE</FormLabel>
          <Input type="text" />
          <FormErrorMessage>postal code is required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>COUNTRY</FormLabel>
          <Input type="text" />
          <FormErrorMessage>country is required</FormErrorMessage>
        </FormControl>
        <div className="user-icons">
          <div className="home-icon" role="presentation" onClick={handleChange}>
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation" onClick={handleChange}>
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation" onClick={handleChange}>
            <HiOutlineLocationMarker />
          </div>

        </div>

        <br />
        <Heading as="h2">LOCATION 2</Heading>
        <FormControl isRequired>
          <FormLabel>ADRESS</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>POSTAL CODE</FormLabel>
          <Input type="text" />
          <FormErrorMessage>postal code is required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>COUNTRY</FormLabel>
          <Input type="text" />
          <FormErrorMessage>country is required</FormErrorMessage>
        </FormControl>
        <div className="user-icons">
          <div className="home-icon" role="presentation" onClick={handleChange}>
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation" onClick={handleChange}>
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation" onClick={handleChange}>
            <HiOutlineLocationMarker />
          </div>

        </div>
        <br />
        <Button type="submit" onClick={handleChange}>CHOOSE ACTIVITIES</Button>
      </form>
    </Container>
  );
}
export default Local;
