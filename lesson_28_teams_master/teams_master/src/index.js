import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom' // ! 1) импортируем  { BrowserRouter } из библиотеки 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>   
    <App />         
  </BrowserRouter>
);          // ! 2) и заворачиваем  <App />  в  <BrowserRouter> --чтобы работал Router 
