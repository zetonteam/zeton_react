import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './Profile.css';
import Footer from '../Footer/Footer';
import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../UI/Button/BasicButton";
import SecondButton from "../UI/Button/SecondButton";
import apiClient from "../../apiClient";
import { Container, Box, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const useStyles = makeStyles({
  large: {
    height: 60,
    width: 60,
  },
  labelStyle: {
    paddingRight: 15,
    paddingLeft: 4,
    height: 24,
    lineHeight: 1.6,
  }
});

const Profile = ({ data, ...props }) => {
  const classes = useStyles();
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

      <section className="profile__header">

        <Avatar src="/broken-image.jpg" className={classes.large} />

        <Container display="flex" flexDirection="column">
          <Typography variant="h5" align="left">{data.first_name}</Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <HomeIcon color="primary" />
            <Typography variant="body1"className={classes.labelStyle}>{data.total_points}</Typography>
            <LocalLibraryIcon color="primary" />
            <Typography variant="body1" className={classes.labelStyle}>{"exp"}</Typography>
          </Box>
        </Container>

      </section>
      <section className="profile__main">
        <Container>
          <BasicButton
            label="DODAJ PUNKTY"
          // onClick={addPoints}
          />

          <SecondButton
            label="PRZYZNAJ NAGRODĘ"
          />
          <SecondButton
            label="DAJ KONSEKWENCJĘ"
          />
        </Container>

      </section>

      <Footer/>
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
