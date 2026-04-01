import React, { useReducer, useState } from 'react';
function todoReducer(state, action) { //stateтекущее состояние
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'toggle':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'remove':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
//живет в памяти приложения
export function Task3Reducer() { //получает текущее состояние, опис действ, единое правило, как состояние изменяется
  const [todos, dispatch] = useReducer(todoReducer, []); //disфункц, отправка действия
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    dispatch({ type: 'add', payload: inputValue });
    setInputValue('');
  };

  return (
    <section>
      <h2>Задание 3: useReducer (Список задач)</h2>
      <div className="todo-input-group">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Что нужно сделать?"
        />
        <button className="btn-save" onClick={handleAdd}>Добавить</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              className="btn-delete"
              onClick={() => dispatch({ type: 'remove', payload: todo.id })}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}