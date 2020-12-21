import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import logo from "../../images/icons/LOGO.svg";


const PublicHomePage = () => {

  return (

    <div className="PublicHomePage">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Witaj w aplikacji "Żeton"!
        </h1>
      <Link to="/dashboard">
        <Button variant="contained" color="primary" size="large">
          Zacznij
        </Button>
      </Link>
    </div >

  )
};

export default PublicHomePage;