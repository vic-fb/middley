import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, Container,
} from '@chakra-ui/react';

function Signup() {
  return (
    <Container>
      <form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <FormHelperText>What shall we call you?</FormHelperText>
          <FormErrorMessage>Name is required.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          <FormErrorMessage>Email is required.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <FormErrorMessage>Password is required.</FormErrorMessage>
        </FormControl>
      </form>
    </Container>
  );
}

export default Signup;
