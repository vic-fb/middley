import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button, Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import userLogin from '../../common/helpers/fetchFunctions';
import { saveUserInfo } from '../../common/helpers/localFunctions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const isError = (response) => typeof response === 'string';
  const navigate = useNavigate();

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
    const response = await userLogin(password, email);
    if (isError(response)) {
      setLoginErrorMsg('Login failed');
      // eslint-disable-next-line no-console
      console.log(loginErrorMsg);
      // return toast({
      //   title: loginErrorMsg,
      //   status: 'error',
      //   isClosable: true,
      // });
    } else {
      // I would prefer only saving token in local and saving user as state/context
      saveUserInfo(response.token, response.user);
      setLoginErrorMsg('');
      navigate('/');
    }
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
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" onChange={handleChange} value={password} />
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default Login;
