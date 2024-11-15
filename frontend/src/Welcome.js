import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm'; // Компонент формы входа
import RegisterForm from './RegisterForm'; // Компонент формы регистрации
import { useNavigate } from 'react-router-dom'; // Для редиректа
import './Welcome.css'; // Стили для компонента Welcome

export default function Welcome({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем наличие токена при загрузке страницы
    const token = localStorage.getItem('token');
    if (token) {
      // Если токен существует, редирект на страницу совместимости
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
    // После успешного входа редирект на страницу совместимости
    onAuthSuccess(); // Обновляем состояние родительского компонента
    navigate('/compatibility');
  };

  return (
    <div className="welcome-page">
      <h2>Добро пожаловать!</h2>
      {isLogin ? (
        <div className="form-container">
          <LoginForm onLoginSuccess={handleAuthSuccess} />
          <p>Нет аккаунта? <button onClick={handleSwitchToRegister}>Зарегистрироваться</button></p>
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
