import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoutesPage.css';

function RoutesPage() {
  const nav = useNavigate();

  function returnHomeClick() {
    nav('/');
  }
  return (
    <div className="RoutesPage">
      <h1>Coming soon!</h1>
      <button className="Home" type="button" onClick={returnHomeClick}>
        Return Home
      </button>
    </div>
  );
}

export default RoutesPage;