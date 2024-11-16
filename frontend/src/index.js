import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './StyleSheets/index.css';
import App from './logic/App';
import Header from './logic/Header';
import Compatibility from './logic/Compatibility'; 
import PrivateRoute from './logic/PrivateRoute';
import Profile from './logic/Profile';
import Personalities from './logic/Personalities';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/compatibility" element={
          <PrivateRoute>
            <Compatibility />
		</PrivateRoute>}/>
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
		</PrivateRoute>}/>
        <Route path="/personalities" element={
          
            <Personalities />
		}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
