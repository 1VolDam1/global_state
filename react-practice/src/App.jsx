import React from 'react';
import './index.css';
import { Task1LiftingState } from './Task1LiftingState';
import { Task2Context } from './Task2Context';
import { Task3Reducer } from './Task3Reducer';
import { Task4Service } from './Task4Service';

export default function App() {
  return (
    <div className="app-container">
      <h1>Практическая работа: Глобальное состояние</h1>
      <hr />
      <Task1LiftingState />
      <hr />
      <Task2Context />
      <hr />
      <Task3Reducer />
      <hr />
      <Task4Service />
    </div>
  );
}