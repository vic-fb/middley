import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import {
  Button, Spacer, ButtonGroup, Box, Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { removeUserToken } from '../../helpers/localFunctions';
import { UserContext } from '../../UserProvider';

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function doLogout() {
    removeUserToken();
    navigate('/login');
    setUser(null);
  }

  return (
    <Box maxW="900px" marginX="auto" height="100%">
      <Flex height="100%" align="center" px={2}>
        <Button
          size="md"
          as={Link}
          to="/"
        >
          Home
        </Button>
        <Spacer />
        <ButtonGroup>
          {!user && (
          <Button as={Link} to="/login" size="md">
            Log In
          </Button>
          )}
          {user && (
          <Button as={Link} to="/profile" size="md">
            Profile
          </Button>
          )}
          {user && (
          <Button onClick={doLogout} size="md">
            <RiLogoutCircleRLine />
          </Button>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
