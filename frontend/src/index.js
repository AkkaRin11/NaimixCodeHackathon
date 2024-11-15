import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Compatibility from './Compatibility'; // Путь должен быть правильным

import Profile from './Profile';
import Personalities from './Personalities';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personalities" element={<Personalities />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
