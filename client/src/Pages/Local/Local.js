import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Local.css';

function Local() {
// fetch api data here

  const nav = useNavigate();

  return (
    <div className="Local">
      <h6>LOCAL</h6>
      <h2>Location 1</h2>
      <input type="text" placeholder="Enter Location 1" />
      <h2>Location 2</h2>
      <input type="text" placeholder="Enter Location 2" />
      <button className="Submit" type="button" onClick={nav('/Local')}>
        Choose Activity
      </button>
    </div>
  );
}
export default Local;
