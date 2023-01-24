import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Heading,
  VStack,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import Dialog from './components/dialog/Dialog';
import UserIcons from './components/user-icons/UserIcons';
import getCurrentLocation from '../../common/helpers/geolocation';
import { revgeocode } from '../../common/helpers/geocode';
import CustomBreadcrumb from '../../common/components/CustomBreadcrumb/CustomBreadcrumb';

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
      <CustomBreadcrumb pages={[{ path: '/local', name: 'Local' }]} />
      <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
        Where are you?
      </Heading>
      <Dialog isOpen={isOpen} onClose={onClose} />
      <form onSubmit={handleSubmit}>
        <VStack spacing={12}>
          <FormControl id="address1" isRequired>
            <FormLabel> My Location </FormLabel>
            <Flex>
              <Input
                type="text"
                variant="outline"
                placeholder="- Enter address, city -"
                value={address1}
                onChange={handleAddress1}
              />
              <UserIcons
                user={user}
                setCurrentAddress={setCurrentAddress}
                setSavedAddress={setSavedAddress}
              />
            </Flex>
          </FormControl>
          <FormControl id="address2" isRequired>
            <FormLabel>My Friend&apos;s Location</FormLabel>
            <Input
              type="text"
              placeholder="- Enter address, city -"
              value={address2}
              onChange={handleAddress2}
            />
          </FormControl>
        </VStack>
        <Button type="submit" mt="4">
          CHOOSE AN ACTIVITY
        </Button>
      </form>
    </Container>
  );
}

export default Local;
