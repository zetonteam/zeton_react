import React from 'react';
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

const Footer = ({handlePanel, ...props}) => {
  const classes = useStyles();

  return (
    <footer className="profile__footer">
      <BottomNavigation
        showLabels
        color="primary"
        className={classes.bgcolors}
      >
        <BottomNavigationAction onClick={() => handlePanel("0")} className={classes.colors} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={() => handlePanel("1")} label="Nagrody" className={classes.colors} icon={<EmojiEventsIcon />} />
        <BottomNavigationAction onClick={() => handlePanel("2")} label="Konsek..." className={classes.colors} icon={<SentimentDissatisfiedIcon />} />
        <BottomNavigationAction onClick={() => handlePanel("3")} label="Info" className={classes.colors} icon={<PersonIcon />} />
        <BottomNavigationAction onClick={() => handlePanel("4")} label="Ustawienia" className={classes.colors} icon={<SettingsIcon />} />
      </BottomNavigation>
    </footer>
  )
}

export default Footer;