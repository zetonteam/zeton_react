import React from 'react';
import logo from './images/icons/LOGO.svg';
import './App.css';
//import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <aside className="welcome">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </aside>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
