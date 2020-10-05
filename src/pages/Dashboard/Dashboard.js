import React, { useEffect, useState } from "react";
import logo from "../../images/icons/LOGO.svg";
import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../../components/UI/Button/Button";
import apiClient from "../../apiClient";
import { Box, Container, Typography } from '@material-ui/core';

const DashboardPage = () => {
  const [showSplashScreen, toggleWelcome] = useState(true);
  const [points, setPoints] = useState(0);
  const [dailyPoints, setDailyPoints] = useState(0);
  const [exp, setExp] = useState(0);
  const [studentName, setStudentName] = useState("-")
  const studentDataURL = "/api/users/students/1";

  useEffect(() => {
    if (showSplashScreen) {
      const timer = setTimeout(() => {
        toggleWelcome(false)
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showSplashScreen]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await apiClient(studentDataURL);

      setStudentName(result.data.first_name);
      setPoints(result.data.total_points);
      setDailyPoints(result.data.daily_points);
      setExp(result.data.exp_points);
      setIsLoading(false);
    };

    fetchData();
  }, [studentDataURL]);

  const addPoints = () => {
    setPoints(points + 1);
    setDailyPoints(dailyPoints + 1);
  };

  return (
    <>
      <aside className={showSplashScreen === true ? "welcome" : "welcome--off"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Witaj w aplikacji "Żeton"!
        </p>
      </aside>

      <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
          <Typography variant="h3">{studentName}</Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
          <HomeIcon color="primary" />
          <Typography variant="h5">Total points: {points}</Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
          <Typography variant="h5">Daily points: {dailyPoints}</Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
          <HomeIcon color="secondary" />
          <Typography variant="h5">Experience: {exp}</Typography>
        </Box>

        <BasicButton
          label="DODAJ PUNKT"
          onClick={addPoints}
        />

        <BasicButton
          label="PRZYZNAJ NAGRODĘ"
        />
        <BasicButton
          label="DAJ KONSEKWENCJĘ"
        />
      </Container>
    </>

  );
};

export default DashboardPage;
