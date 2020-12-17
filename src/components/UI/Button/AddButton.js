import React from "react";
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const AddButton = ({ label, onClick }) => {
  return (
    <div className="padding">
      <Button onClick={onClick} color="primary" size="large" startIcon={<DeleteIcon />}>
        {label}
      </Button>
    </div>
  )
};

export default AddButton;
