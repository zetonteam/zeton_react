import React from "react";
import './ChildItem.css';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { connect } from "react-redux";
import { chooseUserAction } from "../../../api/action";

const AddButton = ({ data, ...props }) => {
  
  const handleClick = (user) => {
    props.getUser(data)
  }

  return (
      <ListItem button onClick={() => {handleClick(data)}}>
        <ListItemAvatar>
          <Avatar alt={data.first_name} src={data.photo} />
        </ListItemAvatar>
        <ListItemText primary={data.first_name} secondary="Jan 9, 2014" />
      </ListItem>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => dispatch(chooseUserAction(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddButton);