import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Container,
  Button,
  Heading,
  Text,
  Link,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link as RouteLink } from 'react-router-dom';
import { userLogin } from '../../common/helpers/auth';
import { saveUserToken } from '../../common/helpers/localFunctions';
import { getUserById } from '../../common/helpers/users';
import { UserContext } from '../../common/UserProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

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
      <VStack spacing={12}>
        <VStack>
          <Heading pb={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
            Welcome!
          </Heading>
          <Heading pb={4} fontSize={{ base: '20px', md: '24px', lg: '40px' }}>
            Sign into your account
          </Heading>
        </VStack>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
              />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <Button type="submit" isLoading={loading} my="60px">
              Submit
            </Button>
          </VStack>
        </form>
        <Text fontSize="xl">
          {'Not registered yet? '}
          <Link as={RouteLink} to="/signup">
            Sign up here
          </Link>
        </Text>
      </VStack>
    </Container>
  );
}

export default Login;
