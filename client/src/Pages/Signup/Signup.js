import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, Container, Button, Heading,
} from '@chakra-ui/react';
// import { useState } from 'react';

function Signup() {
  // [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Heading as="h1">Welcome!</Heading>
      <Heading as="h2">Create your account</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <FormHelperText>What shall we call you?</FormHelperText>
          <FormErrorMessage>Name is required.</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <FormErrorMessage>Password is required.</FormErrorMessage>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default Signup;
