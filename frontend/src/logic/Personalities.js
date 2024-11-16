import React, { useState, useEffect } from "react";
import "../StyleSheets/Personalities.css";

const Personalities = () => {
  const [users, setUsers] = useState([]);
  // const users = [
  //   { id: 1, name: "Иван Иванов Иванович", email: "ivan@example.com", birthday: "01.01.2005", worker: true},
  //   { id: 2, name: "Мария Смирнова", email: "maria@example.com", birthday: "01.01.2005", worker: false },
  //   { id: 3, name: "Анна Петрова", email: "anna@example.com", birthday: "01.01.2005", worker: false },
  //   { id: 4, name: "Иван Иванов Иванович", email: "dmitry@example.com", birthday: "01.01.2005", worker: true },
  //   { id: 5, name: "Иван Иванов", email: "ivan@example.com", birthday: "01.01.2005", worker: false},
  //   { id: 6, name: "Иван Иванов Ивановича", email: "maria@example.com", birthday: "01.01.2005", worker: true },
  //   { id: 7, name: "Анна Петрова", email: "anna@example.com", birthday: "01.01.2005", worker: true },
  //   { id: 8, name: "Дмитрий Иван Иванов Иванович", email: "dmitry@example.com", birthday: "01.01.2005", worker: false },
  // ];
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "http://tikvenniesemechki.ru/api/v1/register";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Token: localStorage.getItem('token'),
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Не удалось получить данные.");
        }
      })
      .then((data) => {
        setLoading(false);
        setUsers(data && []);
      })
      .catch((error) => {
        console.error("Ошибка запроса:", error);
        setLoading(false);
        setError("Ошибка при загрузке данных.");
      });
  }, []);



  if (loading) {
    return <div className="headOfPage">Загрузка...</div>;
  }

  if (error) {
      return <div className="headOfPage">Ошибка: {error}</div>;
    }

  return (
    <div>
    <h2 className="headOfPage">Кандидаты и соискатели</h2>
    <div className="personalities">
      
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <p className="user__inspan"> ФИО: </p>
              <span className="user-name">{user.name}</span>
              <p></p>
              <p className="user__inspan" > Почта: </p>
              <span className="user-email">{user.email}</span>
              <p></p>
              <p className="user__inspan"> Дата Рождения: </p>
              <span className="user-birthday"> {user.birthday}</span>
              <p></p>
              <p className="user__inspan"> Работник </p>
              <span className="user-birthday"> {user.worker ? "✓" : "☓"}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Personalities;
