import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/Header.css';
import logo from '../assets/images/logo.png';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img src={logo}/>
      <nav>
        <button onClick={() => navigate('/compatibility')}>Совместимость</button>
        <button onClick={() => navigate('/personalities')}>Персоналии</button>
        <button onClick={() => navigate('/profile')}>Личный кабинет</button>
		<button onClick={() => {localStorage.removeItem('token');
								navigate('/')
		}}>Выйти</button>
      </nav>
    </header>
  );
}
