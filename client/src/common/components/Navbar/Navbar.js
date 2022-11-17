import React from 'react';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';
import { Button } from '@chakra-ui/react';
import { getUser } from '../../helpers/localFunctions';
// import styles from './Navbar.module.css';

function Navbar() {
  const user = getUser();

  return (
    <nav className="navbar">
      <Button lefticon={<GiWorld />} as={Link} to="/" variant="ghost">
        Home
      </Button>
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
    </nav>
  );
}

export default Navbar;
