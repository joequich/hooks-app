import React from 'react';
import ReactDOM from 'react-dom';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';

ReactDOM.render(
  <React.StrictMode>
    <CounterCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);