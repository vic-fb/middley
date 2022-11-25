import {
  Editable,
  EditableInput,
  EditablePreview,
  Stack,
  Heading,
  HStack,
  Container,
  Spacer,
} from '@chakra-ui/react';
import { BsFillBriefcaseFill, BsFillHouseDoorFill } from 'react-icons/bs';
import React, { useState } from 'react';
import EditableControls from './components/EditableControls';
import { getUserById, updateUserAddress } from '../../common/helpers/users';
import styles from './Profile.module.css';

function Profile({ user, setUser }) {
  const [home, setHome] = useState(user.home);
  const [work, setWork] = useState(user.work);

  const handleChangeHome = (input) => {
    setHome(input);
  };

  const handleChangeWork = (input) => {
    setWork(input);
  };

  const handleSubmit = async () => {
    await updateUserAddress(user.id, home, work);
    const currentUser = await getUserById(user.id);
    setUser(currentUser);
    console.log(currentUser);
  };

  // capitalize first letter of the username for display purposes only (not for database)
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <Container>
      <Stack>
        <Heading py={8} fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
          {`Hi, ${capitalize(user.username)}`}
        </Heading>
        <Heading as="h2" size="md">
          Home
        </Heading>

        <HStack className={styles.address}>
          <BsFillHouseDoorFill className={styles.icon} />
          <Editable
            defaultValue={home}
            name="home"
            onChange={handleChangeHome}
            onSubmit={handleSubmit}
          >
            <HStack>
              <EditablePreview />
              <EditableInput />
              <EditableControls />
            </HStack>
          </Editable>
        </HStack>
        <Spacer />
        <Heading as="h2" size="md">
          Work
        </Heading>
        <HStack className={styles.address}>
          <BsFillBriefcaseFill className={styles.icon} />
          <Editable
            defaultValue={work}
            name="work"
            onChange={handleChangeWork}
            onSubmit={handleSubmit}
          >
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
