import React, { useEffect, useState } from "react";
import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../UI/Button/BasicButton";
import SecondButton from "../UI/Button/SecondButton";
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
const ProfileMain = ({ data, handlePanel, ...props }) => {
  const classes = useStyles();

  return (
    <section className="profile__main">
      <article className="profile__header">

        <Avatar src="/broken-image.jpg" className={classes.large} />

        <Container >
          <Typography variant="h5" align="left">{data.first_name}</Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <HomeIcon color="primary" />
            <Typography variant="body1" className={classes.labelStyle}>{data.total_points}</Typography>
            <LocalLibraryIcon color="primary" />
            <Typography variant="body1" className={classes.labelStyle}>{"exp"}</Typography>
          </Box>
        </Container>

      </article>
      <article className="profile__body">
        <Container>
          <BasicButton
            label="DODAJ PUNKTY"
            onClick={() => handlePanel("1")}
          />

          <SecondButton
            label="PRZYZNAJ NAGRODĘ"
            />
          <SecondButton
            label="DAJ KONSEKWENCJĘ"
            onClick={() => handlePanel("3")}
          />
        </Container>

      </article>
    </section>)
}

export default ProfileMain;