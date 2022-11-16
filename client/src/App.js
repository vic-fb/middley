import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Home from './Pages/Home/Home';
import GlobalView from './Pages/GlobalView/GlobalView';
import Navbar from './CommonComponents/Navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GlobalView" element={<GlobalView />} />
      </Routes>
    </div>
  );
}

export default App;
