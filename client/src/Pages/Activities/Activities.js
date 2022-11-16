import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Activities.css';

function Activities() {
  const nav = useNavigate();

  return (
    <div className="Activities">
      <h6>ACTIVITIES</h6>
      <form className="Activities-form">
        <h3>Activity 1</h3>
        <h3>Activity 2</h3>
        <h3>Activity 3</h3>
        <button className="Submit" type="button" onClick={nav('/Results')}>
          Find Match
        </button>
      </form>
    </div>
  );
}

export default Activities;
