import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null); 

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/*оборачивает часть дерева, все компоненты могут получить это значение*/}
      <div className={`theme-container theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeDisplay() {
  const { theme } = useContext(ThemeContext); //получает напрямую из вышки
  return <p>Текущая тема: <strong>{theme.toUpperCase()}</strong></p>;
}

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Переключить тему</button>;
}

export function Task2Context() {
  return (
    <section>
      <h2>Задание 2: Context для темы</h2>
      <ThemeProvider>
        <ThemeDisplay />
        <ThemeButton />
      </ThemeProvider>
    </section>
  );
}