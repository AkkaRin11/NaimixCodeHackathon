import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Compatibility from './Compatibility'; // Путь должен быть правильным
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';
import Personalities from './Personalities';

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
          <PrivateRoute>
            <Personalities />
		</PrivateRoute>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
