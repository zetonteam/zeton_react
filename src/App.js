import React, { useState } from 'react';
import logo from './images/icons/LOGO.svg';
import Login from './components/Login/Login';
import './App.css';
import Zeton from './components/Zeton';
import { getUser } from './auth'
//import Footer from './components/Footer/Footer'

function App() {
  const [welcome, toggleWelcome] = useState(false)

  useState(() => {
    const timer = setTimeout(() => {
      toggleWelcome(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const profile = () => {
    let addUser;
    getUser() === 'zeton' && (addUser = true)
    return addUser;
  }

  return (
    <div className="App">
      <aside className={welcome === false ? "welcome" : "welcome--off"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </aside>
      {console.log("USER" + getUser())}
      {profile() ? <Zeton profile={'private'} /> : <Login />}      
      {/* <Zeton /> */}
    </div>
  );
}

export default App;
