import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const nav = useNavigate();

  function onLocalClick() {
    nav('/local');
  }

  function onGlobalClick() {
    nav('/GlobalView');
  }

  return (
    <div className="Home">
      <h1>Meet in the Middle</h1>
      <button className="local" type="button" onClick={onLocalClick}>
        Local
      </button>
      <button className="globalView" type="button" onClick={onGlobalClick}>
        Global
      </button>
    </div>
  );
}

export default Home;
