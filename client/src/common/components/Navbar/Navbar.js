import React from 'react';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import {
  Button, Flex, Spacer, ButtonGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { removeUserToken } from '../../helpers/localFunctions';
// import styles from './Navbar.module.css';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  function doLogout() {
    removeUserToken();
    navigate('/login');
    setUser(null);
  }

  return (
    <nav className="navbar">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Button lefticon={<GiWorld />} as={Link} to="/" variant="ghost">
          Home
        </Button>
        <Spacer />
        <ButtonGroup gap="1">
          {!user && (
            <Button as={Link} to="/login" variant="ghost">
              Log In
            </Button>
          )}
          {user && (
            <Button as={Link} to="/profile" variant="ghost">
              Profile
            </Button>
          )}
          {user && (
            <Button variant="ghost" onClick={doLogout}>
              <RiLogoutCircleRLine />
            </Button>
          )}
        </ButtonGroup>
      </Flex>
    </nav>
  );
}

export default Navbar;
