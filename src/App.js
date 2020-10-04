import React from 'react';
import logo from './images/icons/LOGO.svg';
import './App.css';
import Footer from './components/Footer/Footer'

const Przycisk=()=>{

return(
<Button variant="contained" color="primary">
  test
</Button>
);

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
        <Przycisk />
      </header>
      <Footer />
    </div>
  );
}

export default App;
