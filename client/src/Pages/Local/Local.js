import React from 'react';
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
  VStack, useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Dialog from './components/Dialog/Dialog';
import UserIcons from './components/UserIcons/UserIcons';
import getCurrentLocation from '../../common/helpers/geolocation';
import { revgeocode } from '../../common/helpers/geocode';

function Local({
  setAddress1,
  setAddress2,
  handleSubmit,
  address1,
  address2,
  user,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      onOpen();
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
      <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
        Find The Middle
      </Heading>
      <Dialog isOpen={isOpen} onClose={onClose} />
      <form onSubmit={handleSubmit}>
        <VStack>
          <FormControl id="address1" isRequired>
            <FormLabel> My Address </FormLabel>
            <Input
              type="text"
              variant="outline"
              placeholder="- Enter address, city -"
              value={address1}
              onChange={handleAddress1}
              backgroundColor="mitmPurple.50"
              color="black"
            />
          </FormControl>
          <br />
          <UserIcons
            user={user}
            setCurrentAddress={setCurrentAddress}
            setSavedAddress={setSavedAddress}
          />
          <FormControl id="address2" isRequired>
            <FormLabel>My Friend's Address</FormLabel>
            <Input
              type="text"
              placeholder="- Enter address, city -"
              value={address2}
              onChange={handleAddress2}
              backgroundColor="mitmPurple.50"
              color="black"
            />
          </FormControl>
        </VStack>
        <Button type="submit" mt="4">
          GO TO THE MIDDLE
        </Button>
      </form>
    </Container>
  );
}

export default Local;
