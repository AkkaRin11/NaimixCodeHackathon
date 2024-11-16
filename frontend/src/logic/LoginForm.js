import React, { useState } from 'react';
import '../StyleSheets/LoginForm.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ onLoginSuccess }) {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage({ type: 'error', text: 'Введите логин и пароль.' });
      return;
    }

    fetch('http://tikvenniesemechki.ru/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setMessage({ type: 'error', text: 'Неправильный логин или пароль.' });
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        const token = data.token;
        localStorage.setItem('token', token);
        onLoginSuccess(token);
        setMessage({ type: 'success', text: 'Вы успешно вошли!' });
		navigate('/compatibility');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-form">
      <h2>Вход</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Логин:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {message && (
          <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
            {message.text}
          </div>
        )}

        <div>
          <button type="submit">Войти</button>
        </div>
      </form>
    </div>
  );
}
