import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Home from './Pages/Home/Home';
import Local from './Pages/Local/Local';
import GlobalView from './Pages/GlobalView/GlobalView';
import Navbar from './CommonComponents/Navbar/Navbar';
import Activities from './Pages/Activities/Activities';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GlobalView" element={<GlobalView />} />
        <Route path="/Local" element={<Local />} />
        <Route path="/Activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
