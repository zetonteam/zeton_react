import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';


const AddButton = ({ data }) => {
  console.log(data)

  const handleClick = (user) => {
    console.log(user)

  };

  return (
    <ListItem button onClick={() => handleClick(data.username)}>
      <ListItemAvatar>
        <Avatar alt={data.first_name} src={data.photo} />
      </ListItemAvatar>
      <ListItemText primary={data.first_name} secondary="Jan 9, 2014" />
    </ListItem>
  )
};

export default AddButton;