import React from 'react';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';
import { getUser } from '../../helpers/localFunctions';
// import styles from './Navbar.module.css';

function Navbar() {
  const user = getUser();

  return (
    <nav className="navbar">
      <Link to="/">
        <GiWorld />
        Home
      </Link>
      {!user && <Link to="/login">Log In</Link>}
      {user && <Link to="/profile">Profile</Link>}
    </nav>
  );
}

export default Navbar;
