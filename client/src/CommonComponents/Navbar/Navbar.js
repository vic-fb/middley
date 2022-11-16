import React from 'react';
import { Link } from 'react-router-dom';
// import { Avatar } from '@chakra-ui/react';

import styles from './Navbar.module.css';

function Navbar() {
  const loggedin = true;

  return (
    <nav className="navbar">
      <Link to="/" className={styles.HomeLink}>
        Home
      </Link>
      {loggedin && (
        <Link to="/profile" className={styles.ProfileLink}>
          Profile
        </Link>
      )}
      {!loggedin && (
        <Link to="/login" className={styles.LoginLink}>
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
