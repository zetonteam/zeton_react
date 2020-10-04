import React, { useState } from 'react';
import React , {useState}from 'react';
import logo from './images/icons/LOGO.svg';
import Login from './components/Login/Login';
import './App.css';
//import Footer from './components/Footer/Footer'
import Footer from './components/Footer/Footer'
import {Button} from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';





const ButtonReward=()=>{

return(
        <div className="padding">
        <Button variant="contained" color="primary">
            PRZYZNAJ NAGRODĘ
        </Button></div>
);
}

const ButtonConsequence=()=>{

return(
        <div className="padding">
        <Button variant="contained" color="primary">
  DAJ KONSEKWENCJĘ
</Button></div>
);
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function App() {
  const [welcome, toggleWelcome] = useState(false)

  useState(() => {
    const timer = setTimeout(() => {
      toggleWelcome(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

const [points, togglePoints] = useState(50)
const [exp, toggleExp] = useState(50)
const [child_name, toggleChild_Name] = useState("Wojtek")

function AddPoints(){
let number = points;
let number1 = exp;
togglePoints(number + 1)
toggleExp(exp + 1)
}
const ButtonPoints=()=>{

return(
   <div className="padding">
       <Button onClick={()=>AddPoints(points+1, exp+1)} variant="contained" color="primary">
            DODAJ PUNKT
        </Button></div>
);
}
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
        {child_name}
        <HomeIcon color="primary" /><div>{points}</div> <br/>
        <HomeIcon color="secondary" />{exp}
     <ButtonPoints />
     <ButtonReward />
     <ButtonConsequence />
      </header>
      <Footer />
    </div>
  );
}

export default App;
