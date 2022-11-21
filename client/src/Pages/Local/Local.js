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
} from '@chakra-ui/react';
import { BsFillHouseDoorFill, BsFillBriefcaseFill } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Local({ setAddress1, setAddress2, handleSubmit, address1, address2 }) {
  const handleAddress1 = (e) => {
    setAddress1(e.target.value);
  };

  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
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
        Find Midway Point
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="address1" isRequired>
          <FormLabel>Address 1</FormLabel>
          <Input
            type="text"
            placeholder="Enter address"
            value={address1} // should I take this out?
            onChange={handleAddress1}
          />
        </FormControl>

        <div className="user-icons">
          <div className="home-icon" role="presentation">
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation">
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation">
            <HiOutlineLocationMarker />
          </div>
        </div>

        <br />

        <FormControl id="address2" isRequired>
          <FormLabel>Address 2</FormLabel>
          <Input
            type="text"
            placeholder="Enter address"
            value={address2} // should I take this out?
            onChange={handleAddress2}
          />
        </FormControl>

        <div className="user-icons">
          <div className="home-icon" role="presentation">
            <BsFillHouseDoorFill />
          </div>
          <div className="work-icon" role="presentation">
            <BsFillBriefcaseFill />
          </div>
          <div className="currentLocation-icon" role="presentation">
            <HiOutlineLocationMarker />
          </div>
        </div>

        <Button type="submit" colorScheme="teal" mt="4">
          Submit
        </Button>
      </form>
      <div />
    </Container>
  );
}

export default Local;
