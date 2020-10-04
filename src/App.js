import React, { useState } from 'react';
import logo from './images/icons/LOGO.svg';
import './App.css';
//import Footer from './components/Footer/Footer'

function App() {
  const [welcome, toggleWelcome] = useState(false)

  useState(() => {
    const timer = setTimeout(() => {
      toggleWelcome(true)
    }, 3000);
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
      <Login />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
