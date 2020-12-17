import React, { useEffect, useState } from "react";
import logo from "../../images/icons/LOGO.svg";
import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../../components/UI/Button/Button";
import apiClient from "../../apiClient";
import Profile from "../../components/Profile/Profile";
import Home from "../../components/Home/HomeCaregiver";
import { Box, Container, Typography } from '@material-ui/core';

const DashboardPage = () => {
  const [showSplashScreen, toggleWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const studentDataURL = "/api/users/students/";

  useEffect(() => {
    if (showSplashScreen) {
      const timer = setTimeout(() => {
        toggleWelcome(false)
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSplashScreen]);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await apiClient(studentDataURL);
      setChildren(result.data)
      setIsLoading(false);
    };

    fetchData();
  }, [studentDataURL]);

  return (
    <>
      <aside className={showSplashScreen === true ? "welcome" : "welcome--off"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </aside>

      <Home children={children}/>
    </>

  );
};

export default DashboardPage;
