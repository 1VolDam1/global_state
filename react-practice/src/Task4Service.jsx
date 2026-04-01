import React, { useState, useEffect } from 'react';
//модуль, выносится логика не связанная напрямую с jsx
const userService = { //отвечает за localstr (сохраняе данные в формате ключ значение)
  saveUser: (user) => localStorage.setItem('app_user', JSON.stringify(user)),
  getUser: () => {
    const saved = localStorage.getItem('app_user');
    return saved ? JSON.parse(saved) : null; //обратно в объект
  },
  removeUser: () => localStorage.removeItem('app_user')
};

export function Task4Service() { //хранение глобального состояния пользователя
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setUser(userService.getUser());
  }, []);

  const handleSaveUser = () => {
    if (!name.trim()) return;
    const newUser = { id: Date.now(), name, role: role || 'Пользователь' };
    userService.saveUser(newUser);
    setUser(newUser);
    setName('');
    setRole('');
  };

  const handleRemoveUser = () => {
    userService.removeUser();
    setUser(null);
  };

  return (
    <section>
      <h2>Задание 4: Сервис (User Storage)</h2>
      {!user ? (
        <div className="user-form">
          <h3>Добавить пользователя</h3>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" />
          <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Роль" />
          <button className="btn-save" onClick={handleSaveUser}>Сохранить</button>
        </div>
      ) : (
        <div className="user-card">
          <h3>Карточка пользователя</h3>
          <p><strong>Имя:</strong> {user.name}</p>
          <p><strong>Роль:</strong> {user.role}</p>
          <button className="btn-delete" onClick={handleRemoveUser}>Удалить пользователя</button>
        </div>
      )}
    </section>
  );
}