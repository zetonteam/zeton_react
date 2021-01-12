import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeChoosenUserAction } from "../../api/action";
import HomeIcon from "../../components/UI/HomeIcon/HomeIcon";
import BasicButton from "../UI/Button/BasicButton";
import SecondButton from "../UI/Button/SecondButton";
import { Container, Box, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
  },
  paddingNull: {
    padding: 0,
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

        <IconButton aria-label="back" onClick={() => props.removeUser()} className={classes.paddingNull}>
          <ExitToAppIcon />
        </IconButton>

      </article>
      <article className="profile__body">
        <Container>
          <BasicButton
            label="DODAJ PUNKTY"
            onClick={() => handlePanel("01")}
          />
          <SecondButton
            label="PRZYZNAJ NAGRODĘ"
            onClick={() => handlePanel("02")}
          />
          <SecondButton
            label="DAJ KONSEKWENCJĘ"
            onClick={() => handlePanel("03")}
          />
        </Container>

      </article>
    </section>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeChoosenUserAction()),
  };
};

export default connect(null, mapDispatchToProps)(ProfileMain);