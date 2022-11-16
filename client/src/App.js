// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import Home from './Pages/Home/home';
import Local from './Pages/Local/Local';
import Global from './Pages/Global/Global';
import Navbar from './CommonComponents/Navbar/Navbar';
import Activities from './Pages/Activities/Activities';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Local" element={<Local />} />
        <Route path="/Global" element={<Global />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
