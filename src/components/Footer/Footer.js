import React from 'react';
import { connect } from "react-redux";
import { removeChoosenUserAction } from "../../api/action";
import { ButtonGroup, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import HomeIcon from '@material-ui/icons/Home';

const Footer = (props) => {
  return (
    <footer className="profiel__footer">
      <ButtonGroup disableElevation variant="contained" color="primary" aria-label="text primary button group">
        <Button onClick={() => props.removeUser()}><HomeIcon/></Button>
        <Button ><EmojiEventsIcon /></Button>
        <Button ><SentimentDissatisfiedIcon /></Button>
        <Button>Info</Button>
        <Button ><SettingsIcon /></Button>
      </ButtonGroup>
    </footer>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeChoosenUserAction()),
  };
};


export default connect(null, mapDispatchToProps)(Footer)