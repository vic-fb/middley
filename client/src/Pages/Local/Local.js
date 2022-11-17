/* eslint-disable jsx-a11y/label-has-associated-control */
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

  // handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    nav('/Activities');
  };

  const handleClick = (event) => {
    event.preventDefault();
    nav('/Options'); // this is the path to the Options page but should give the form the user home adress
    console.log('The icon was clicked.');
  };

  return (
    <Container>
      <Heading as="h2">LOCATION 1</Heading>
      <form onSubmit={handleSubmit}>
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
          <div className="home-icon" role="presentation" onClick={handleClick}>
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation" onClick={handleClick}>
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation" onClick={handleClick}>
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
          <div className="home-icon" role="presentation" onClick={handleClick}>
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation" onClick={handleClick}>
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation" onClick={handleClick}>
            <HiOutlineLocationMarker />
          </div>

        </div>
        <br />
        <Button type="submit">CHOOSE ACTIVITIES</Button>
      </form>
    </Container>
  );
}
export default Local;
