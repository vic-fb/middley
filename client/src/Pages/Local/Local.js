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

function Local({ setAddress1, setAddress2, handleSubmit, address1, address2, user }) {
  const handleAddress1 = (e) => {
    setAddress1(e.target.value);
  };

  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
  };

  getCurrentLocation()
    .then((location) => setAddress1(location.join()));

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
        Find Midway Point
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack>
          <FormControl id="address1" isRequired>
            <FormLabel>Address 1</FormLabel>
            <Input
              type="text"
              placeholder="Enter address"
              value={address1}
              onChange={handleAddress1}
            />
          </FormControl>

          <UserIcons user={user} />
          <FormControl id="address2" isRequired>
            <FormLabel>Address 2</FormLabel>
            <Input
              type="text"
              placeholder="Enter address"
              value={address2}
              onChange={handleAddress2}
            />
          </FormControl>
        </VStack>

        <Button type="submit" colorScheme="teal" mt="4">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Local;
