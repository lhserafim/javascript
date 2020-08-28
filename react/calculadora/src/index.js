import React from 'react';
import ReactDOM from 'react-dom';
// Aula 369. Componente Calculator
import './index.css'; // Vou alterar o arquivo index.css
//import App from './App'; Altero a chamada p/ a chamada do meu arquivo personalizado
import App from './main/Calculator';
import * as serviceWorker from './serviceWorker';
import Calculator from './main/Calculator';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> Altero a chamada para a chamada do meu arquivo personalizado */} 
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
