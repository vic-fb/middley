import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Container,
  Button, Heading, Text, Link, useToast,
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
      <Heading as="h1">Welcome!</Heading>
      <Heading as="h2">Sign into your account</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" onChange={handleChange} value={email} />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" onChange={handleChange} value={password} />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={loading}>Submit</Button>
      </form>
      <Text>
        {'Not yet registered? Sign up '}
        <Link as={RouteLink} to="/signup">here</Link>
      </Text>
    </Container>
  );
}

export default Login;
