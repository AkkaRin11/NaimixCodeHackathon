import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from './assets/images/logo.png';
export default function Header() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <img src={logo}/>
      <nav>
        <button onClick={() => handleRedirect('/compatibility')}>Совместимость</button>
        <button onClick={() => handleRedirect('/profile')}>Персоналии</button>
        <button onClick={() => handleRedirect('/dashboard')}>Личный кабинет</button>
      </nav>
    </header>
  );
}
