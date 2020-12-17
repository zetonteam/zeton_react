import React from "react";
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';


const AddButton = ({ data }) => {

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <ListItemLink href={data.first_name}>
      <ListItemAvatar>
        <Avatar alt={data.first_name} src={data.photo} />
      </ListItemAvatar>
      <ListItemText primary={data.first_name} secondary="Jan 9, 2014" />
    </ListItemLink>
  )
};

export default AddButton;