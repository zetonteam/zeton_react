import React from "react";
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddButton = ({ label, onClick }) => {
  return (
    <div className="padding">
      <Button onClick={onClick} color="primary" size="large" startIcon={<AddIcon />}>
        {label}
      </Button>
    </div>
  )
};

export default AddButton;
