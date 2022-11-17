import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const nav = useNavigate();

  function onHomeClick() {
    nav('/');
  }
  function onLoginClick() {
    nav('/login');
  }
  function onProfileClick() {
    nav('/profile');
  }

  return (
    <nav className="navbar">
      <button className={styles.HomeLink} type="button" onClick={onHomeClick}>
        Home
      </button>
      <button className={styles.LoginLink} type="button" onClick={onLoginClick}>
        Sign In
      </button>
      <button className={styles.ProfileLink} type="button" onClick={onProfileClick}>
        Profile
      </button>
    </nav>
  );
}

export default Navbar;
