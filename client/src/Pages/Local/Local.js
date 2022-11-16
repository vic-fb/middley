import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Local.css';

function Local() {
  const nav = useNavigate();

  // handle the form submission
  const handleClick = (event) => {
    event.preventDefault();
    nav('/Activities');
  };
  return (
    <div className="Local">
      <h6>LOCAL</h6>
      <form className="Local-form">
        <h1>Location 1</h1>
        <input type="text" placeholder="Enter a location" />
        <h2>Location 2</h2>
        <input type="text" placeholder="Enter location" />
        <button className="Submit" type="button" onClick={handleClick}>
          Choose Activity
        </button>
      </form>
    </div>
  );
}
export default Local;
