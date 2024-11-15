import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const navigate = useNavigate();
  // hooks for states
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null); 
  const [isVisible, setIsVisible] = useState(false);
  
  

  // regex for names validating
  const nameRegex = /^[А-Яа-яЁё]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // validating
    if (!nameRegex.test(lastName) || !nameRegex.test(firstName)) {
      setMessage({ type: 'error', text: 'Фамилия, имя и отчество должны содержать только кириллические символы и быть не короче двух букв.' });
      return;
    }
	if (middleName && !nameRegex.test(middleName)){
		setMessage({ type: 'error', text: 'Отчество должно содержать только кириллические символы и быть не короче двух букв.' });
      return;
	}
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Пароли не совпадают' });
      return;
    }

    // server logic
		let url = 'http://tikvenniesemechki.ru/api/v1/register'
		fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
				username: username,
				firstName: firstName,
				lastName: lastName,
				middleName: middleName,
				password: password
			})
        })
            .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                setMessage({ type: 'error', text: 'Не удалось' });
            }
        })
            .then(data => {
            const token = data.token;
			console.log("Got token");
			setMessage({ type: 'success', text: 'Регистрация прошла успешно!' });
			localStorage.setItem('token', token);
			navigate('/compatibility');
        })
            .catch(error => {
            console.error(error);
            setMessage({type: 'error', text: 'Ошибка при отправке данных на сервер.'});
        });
  };

  return (
  <div className="container">
    <div className="registration-form">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lastName">Фамилия:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="firstName">Имя:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="middleName">Отчество:</label>
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword">Подтверждение пароля:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {message && (
          <div className = 'error' style={{ color: message.type === 'error' ? 'red' : 'green' }}>
            {message.text}
          </div>
        )}

        <div>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
	</div>
  );
};