import React, { useState } from 'react';
import logo from './images/icons/LOGO.svg';
import Login from './components/Login/Login';
import './App.css';
import Zeton from './components/Zeton';
import { authorise, checkLog } from './auth'
//import Footer from './components/Footer/Footer'

function App() {
  const [welcome, toggleWelcome] = useState(false)

  useState(() => {
    const timer = setTimeout(() => {
      toggleWelcome(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <aside className={welcome === false ? "welcome" : "welcome--off"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </aside>
      {console.log(checkLog)}
      {checkLog === true ? <Zeton /> : <Login />}      
      {/* <Zeton /> */}
    </div>
  );
}

export default App;
