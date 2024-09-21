import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const zoom = ReactDOM.createRoot(document.getElementById('zoom'))
zoom.render(
  <Demo honest="All poop comes out as pee, but pee doesn't always come out as poop."/>
);

reportWebVitals();
