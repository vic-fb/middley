/* eslint-disable no-console */
import React from 'react';
import './Local.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import UserIcons from './components/UserIcons';
import getCurrentLocation from '../../common/helpers/geolocation';
import { revgeocode } from '../../common/helpers/geocode';

function Local({ setAddress1, setAddress2, handleSubmit, address1, address2, user }) {
  const handleAddress1 = (e) => {
    setAddress1(e.target.value);
  };

  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
  };

  const setCurrentAddress = async () => {
    const location = await getCurrentLocation();
    const response = await revgeocode(location);
    if (response.data) {
      setAddress1(response.data.formatted_address);
    } else {
      console.log('We could not find your location');
    }
  };

  const setSavedAddress = (option) => {
    if (user[option]) {
      setAddress1(user[option]);
    } else {
      console.log(`You have not saved a ${option} address yet`);
    }
  };

  return (
    <Container>
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />} py="4">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} to="/local">
            Local
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h1" size="2xl" mb="4">
        GET MIDDLE POINT
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack>
          <FormControl id="address1" isRequired>
            <FormLabel> Adress One </FormLabel>
            <Input
              backgroundColor="rgba(215,212,224,0.2)"
              type="text"
              placeholder="Enter address"
              value={address1}
              onChange={handleAddress1}
            />
          </FormControl>
          <br />
          <UserIcons
            user={user}
            setCurrentAddress={setCurrentAddress}
            setSavedAddress={setSavedAddress}
          />
          <FormControl id="address2" isRequired>
            <FormLabel>Adress Two</FormLabel>
            <Input
              backgroundColor="rgba(215,212,224,0.2)"
              type="text"
              placeholder="Enter address"
              value={address2}
              onChange={handleAddress2}
            />
          </FormControl>
        </VStack>

        <Button type="submit" mt="4">
          GO
        </Button>
      </form>
    </Container>
  );
}

export default Local;
