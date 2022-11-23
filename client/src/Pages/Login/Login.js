import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Container,
  Button, Heading, Text, Link, useToast, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link as RouteLink } from 'react-router-dom';
import { userLogin } from '../../common/helpers/auth';
import { saveUserToken } from '../../common/helpers/localFunctions';
import { getUserById } from '../../common/helpers/users';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  async function doUserLogin() {
    try {
      setLoading(true);
      const response = await userLogin(password, email);
      saveUserToken(response.token);
      const currentUser = await getUserById(response.id);
      setUser(currentUser);
      navigate('/');
    } catch (error) {
      toast({
        title: 'Login failed',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    doUserLogin(email, password);
  };

  return (
    <Container>
      <VStack spacing="24px">
        <Heading as="h1" size="lg">Welcome!</Heading>
        <Heading as="h2" size="md">Sign into your account</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing="24px">
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input backgroundColor="rgba(215,212,224,0.2)" type="email" name="email" onChange={handleChange} value={email} />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input backgroundColor="rgba(215,212,224,0.2)" type="password" name="password" onChange={handleChange} value={password} />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <Button py="1" type="submit" isLoading={loading}>Submit</Button>
          </VStack>
        </form>
        <Text>
          {'Not yet registered? Sign up '}
          <Link as={RouteLink} to="/signup">here</Link>
        </Text>
      </VStack>
    </Container>
  );
}

export default Login;
