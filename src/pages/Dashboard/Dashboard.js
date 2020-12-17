import React, { useEffect, useState } from "react";
import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../../components/UI/Button/BasicButton";
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
      <Home children={children}/>
    </>

  );
};

export default DashboardPage;
