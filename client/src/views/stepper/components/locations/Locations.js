import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Heading,
  VStack,
  useDisclosure,
  Flex, useToast,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../../../../common/UserProvider';
import { Context } from '../Provider';
import Dialog from './components/dialog/Dialog';
import UserIcons from './components/user-icons/UserIcons';
import getCurrentLocation from '../../../../common/helpers/geolocation';
import { revgeocode } from '../../../../common/helpers/geocode';

function Locations() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { locations, updateLocations } = useContext(Context);
  const { user } = useContext(UserContext);

  const toast = useToast();

  const handleChange = (e) => {
    updateLocations({ ...locations, [e.target.name]: e.target.value });
  };

  const setCurrentAddress = async () => {
    const location = await getCurrentLocation();
    const response = await revgeocode(location);
    if (response.data) {
      updateLocations({ ...locations, address1: response.data.formatted_address });
    } else {
      toast({
        title: 'We could not find your location',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const setSavedAddress = (option) => {
    if (user[option]) {
      updateLocations({ ...locations, address1: user[option] });
    } else {
      onOpen();
    }
  };

  return (
    <Container>
      <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
        Where are you?
      </Heading>
      <Dialog isOpen={isOpen} onClose={onClose} />
      <VStack spacing={12}>
        <FormControl id="address1" isRequired>
          <FormLabel>Your location</FormLabel>
          <Flex>
            <Input
              type="text"
              variant="outline"
              placeholder="Rambla de Mercedes 5, Barcelona"
              value={locations.address1}
              name="address1"
              onChange={handleChange}
            />
            <UserIcons
              user={user}
              setCurrentAddress={setCurrentAddress}
              setSavedAddress={setSavedAddress}
            />
          </Flex>
        </FormControl>
        <FormControl id="address2" isRequired>
          <FormLabel>Your friend&apos;s location</FormLabel>
          <Input
            type="text"
            placeholder="Carrer d'Aragó 634, Barcelona"
            name="address2"
            value={locations.address2}
            onChange={handleChange}
          />
        </FormControl>
      </VStack>
    </Container>
  );
}

export default Locations;
