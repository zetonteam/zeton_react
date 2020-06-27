import React from 'react';
import logo from './images/icons/LOGO.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </header>
    </div>
  );
}

export default App;
