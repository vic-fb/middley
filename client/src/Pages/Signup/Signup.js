import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
  Heading,
  VStack,
  // useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { register } from '../../common/helpers/auth';

function Signup() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    // should refactor it to an object! :)
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'username':
        setUsername(value);
        break;
      default:
        break;
    }
  };

  async function doRegister() {
    try {
      setLoading(true);
      const response = await register(username, email, password);
      navigate('/login');
      console.log(response);
    } catch (error) {
      //   toast({
      //     title: 'Signup failed',
      //     status: 'error',
      //     duration: 9000,
      //     isClosable: true,
      //   });
    }
    setLoading(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    doRegister(username, email, password);
  };

  return (
    <Container centerContent>
      <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
        Welcome!
      </Heading>
      <Heading pb={4} fontSize={{ base: '20px', md: '24px', lg: '40px' }}>
        Create your account
      </Heading>
      <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
        <VStack spacing="24px">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              backgroundColor="#D4BBDD"
              color="black"
            />
            <FormHelperText>What shall we call you?</FormHelperText>
            <FormErrorMessage>Name is required.</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              backgroundColor="#D4BBDD"
              color="black"
            />
            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              backgroundColor="#D4BBDD"
              color="black"
            />
            <FormErrorMessage>Password is required.</FormErrorMessage>
          </FormControl>
          <Button type="submit" isLoading={loading}>
            Submit
          </Button>
        </VStack>
      </form>
    </Container>
  );
}

export default Signup;
