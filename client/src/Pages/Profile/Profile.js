import {
  Editable,
  EditableInput,
  EditablePreview,
  Stack, Heading, HStack, Container, Spacer,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import React, { useState } from 'react';
import EditableControls from './components/EditableControls';

function Profile({ user }) {
  const [home, setHome] = useState(user.home);
  const [work, setWork] = useState(user.work);

  const handleChangeHome = (input) => {
    setHome(input);
  };

  const handleChangeWork = (input) => {
    setWork(input);
  };

  const handleSubmit = () => {
    console.log(home, work);
  };

  return (
    <Container>
      <Stack>
        <Heading as="h1" size="xl">{`Hi, ${user.username}`}</Heading>
        <Heading as="h2" size="md">Home</Heading>
        <HStack>
          <BsFillHouseDoorFill />
          <Editable defaultValue={home} name="home" onChange={handleChangeHome} onSubmit={handleSubmit}>
            <HStack>
              <EditablePreview />
              <EditableInput />
              <EditableControls />
            </HStack>
          </Editable>
        </HStack>
        <Spacer />
        <Heading as="h2" size="md">Work</Heading>
        <HStack>
          <BsFillBriefcaseFill />
          <Editable defaultValue={work} name="work" onChange={handleChangeWork} onSubmit={handleSubmit}>
            <HStack>
              <EditablePreview />
              <EditableInput />
              <EditableControls />
            </HStack>
          </Editable>
        </HStack>
      </Stack>
    </Container>
  );
}

export default Profile;
