import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm'; 
import RegisterForm from './RegisterForm'; 
import { useNavigate } from 'react-router-dom'; 
import '../StyleSheets/Welcome.css'; 

export default function Welcome({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/compatibility');
    }
  }, [navigate]);

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  const handleAuthSuccess = () => {
    onAuthSuccess(); 
    navigate('/compatibility');
  };

  return (
    <div className="welcome-page">
      <h2>Добро пожаловать!</h2>
      {isLogin ? (
        <div className="form-container">
          <LoginForm onLoginSuccess={handleAuthSuccess} />
          Нет аккаунта? <button onClick={handleSwitchToRegister}>Зарегистрироваться</button>
        </div>
      ) : (
        <div className="form-container">
          <RegisterForm onRegisterSuccess={handleAuthSuccess} />
          Уже есть аккаунт? <button onClick={handleSwitchToLogin}>Войти</button>
        </div>
      )}
    </div>
  );
}
