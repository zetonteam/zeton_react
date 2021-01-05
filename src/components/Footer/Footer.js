import React from 'react';
import { connect } from "react-redux";
import { removeChoosenUserAction } from "../../api/action";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './Footer.css';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  bgcolors: {
    backgroundColor: '#555',
  },
  colors: {
    color: 'white',
    minWidth: 55,
  },
});

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className="profile__footer">
      <BottomNavigation
        showLabels
        color="primary"
        className={classes.bgcolors}
      >
        <BottomNavigationAction onClick={() => props.removeUser()} className={classes.colors} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Nagrody" className={classes.colors} icon={<EmojiEventsIcon />} />
        <BottomNavigationAction label="Konsek..." className={classes.colors} icon={<SentimentDissatisfiedIcon />} />
        <BottomNavigationAction label="Info" className={classes.colors} icon={<PersonIcon />} />
        <BottomNavigationAction label="Ustawienia" className={classes.colors} icon={<SettingsIcon />} />
      </BottomNavigation>
    </footer>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeChoosenUserAction()),
  };
};


export default connect(null, mapDispatchToProps)(Footer)