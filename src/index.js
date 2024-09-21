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
  <Demo honest="Watch and learn, learn to read and write."/>
);

const room = ReactDOM.createRoot(document.getElementById('room'))
room.render(
)

reportWebVitals();