import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/icons/LOGO.svg";


const PublicHomePage = () => {

  return (

    <div className="PublicHomePage">
      <h1>Żeton Public</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Witaj w aplikacji "Żeton"!
        </p>
      <Link to="/dashboard">Zacznij</Link>
    </div >

  )
};

export default PublicHomePage;