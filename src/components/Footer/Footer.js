import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import HomeIcon from '@material-ui/icons/Home';

const Footer = () => {
  return (
    <footer className="profiel__footer">
      <ButtonGroup disableElevation variant="contained" color="primary" aria-label="text primary button group">
        <Button ><HomeIcon/></Button>
        <Button ><EmojiEventsIcon /></Button>
        <Button ><SentimentDissatisfiedIcon /></Button>
        <Button>Info</Button>
        <Button ><SettingsIcon /></Button>
      </ButtonGroup>
    </footer>
  )
}


export default Footer