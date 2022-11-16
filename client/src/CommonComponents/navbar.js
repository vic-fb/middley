import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './navbar.css';

function Navbar() {
  const nav = useNavigate();

  function onHomeClick() {
    nav('/');
  }

  return (
    <nav className="navbar">
      <button className="homeicon" type="button" onClick={onHomeClick}>
        Home
      </button>
    </nav>
  );
}

export default Navbar;
