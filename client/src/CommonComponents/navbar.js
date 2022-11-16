import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './navbar.css';

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
      <button className="homeicon" type="button" onClick={onHomeClick}>
        Home
      </button>
      <button className="signIn" type="button" onClick={onLoginClick}>
        Sign In
      </button>
      <button className="profile" type="button" onClick={onProfileClick}>
        Profile
      </button>
    </nav>
  );
}

export default Navbar;
