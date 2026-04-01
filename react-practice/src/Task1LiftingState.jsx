import React, { useState } from 'react';

function InputField({ value, onChange }) { //получает значение и обрабочик через пропс
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '15px', fontWeight: '500' }}>Введите текст:</label>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder="Печатайте здесь..." 
      />
    </div>
  );
}

function Preview({ text }) {
  return (
    <div className="preview-box">
      <strong>Предварительный просмотр:</strong>
      <p>{text || 'Пока ничего нет...'}</p>
    </div>
  );
}

export function Task1LiftingState() {
  const [text, setText] = useState(''); //состояние хранится в общем родителе
  return (
    <section>
      <h2>Задание 1: Поднятие состояния</h2>
      <InputField value={text} onChange={(e) => setText(e.target.value)} />
      <Preview text={text} />
    </section>
  );
}