import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Global.css';

function Global() {
  const nav = useNavigate();

  function returnHomeClick() {
    nav('/');
  }
  return (
    <div className="Home">
      <h1>Coming soon!</h1>
      <button className="Home" type="button" onClick={returnHomeClick}>
        Return Home
      </button>
    </div>
  );
}

export default Global;
