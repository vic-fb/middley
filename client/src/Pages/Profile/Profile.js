import {
  Editable,
  EditableInput,
  EditablePreview,
  Stack, Heading, HStack, Container, Spacer,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import React from 'react';

function Profile({ user }) {
  return (
    <Container>
      <Stack>
        <Heading as="h1" size="xl">{`Hi, ${user.username}`}</Heading>
        <Heading as="h2" size="md">Home</Heading>
        <HStack>
          <BsFillBriefcaseFill />
          <Editable defaultValue={user.home}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </HStack>
        <Spacer />
        <Heading as="h2" size="md">Work</Heading>
        <HStack>
          <BsFillHouseDoorFill />
          <Editable defaultValue={user.work}>
            <EditablePreview />
            <EditableInput />
          </Editable>
        </HStack>
      </Stack>
    </Container>
  );
}

export default Profile;
