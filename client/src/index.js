import React from 'react';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
// To enable React Router, wrap the entire App in <BrowserRouter>
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

serviceWorkerRegistration.register();
