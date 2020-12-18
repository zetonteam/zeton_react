import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from '../../api/store';

import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../UI/Button/BasicButton";
import apiClient from "../../apiClient";
import { Box, Container, Typography } from '@material-ui/core';

const Profile = ({ data, ...props}) => {
  const [points, setPoints] = useState(0);
  const [dailyPoints, setDailyPoints] = useState(0);
  const [exp, setExp] = useState(0);
  const [studentName, setStudentName] = useState("-")
 // const studentDataURL = "/api/users/students/1";

  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);

  //     const result = await apiClient(studentDataURL);

  //     setStudentName(result.data.first_name);
  //     setPoints(result.data.total_points);
  //     setDailyPoints(result.data.daily_points);
  //     setExp(result.data.exp_points);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, [studentDataURL]);

  // const addPoints = () => {
  //   setPoints(points + 1);
  //   setDailyPoints(dailyPoints + 1);
  // };

  console.log(data);

  // useEffect(() => {

  //   findUser(props.users)
      
  // }, [props])


  return (
    <>


      <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
          <Typography variant="h5">{data.first_name}</Typography>
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
            <HomeIcon color="primary" />
            <Typography variant="body1">{data.total_points}</Typography>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
            <HomeIcon color="secondary" />
            <Typography variant="body1">{"exp"}</Typography>
          </Box>

        </Box>
      </Container>

      <Container>
        <BasicButton
          label="DODAJ PUNKT"
          // onClick={addPoints}
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
    //hej: console.log(state.users)
  };
};

export default connect(mapStateToProps)(Profile);
