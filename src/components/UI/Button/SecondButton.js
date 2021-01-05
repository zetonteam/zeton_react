import React from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  width: {
    width: 200,
    margin: 5,
  },
});

const SecondButton = ({label, onClick}) => {
  const classes = useStyles();

  return (
    <div className="padding">
      <Button onClick={onClick} variant="outlined" color="primary" size="large" className={classes.width}>
        {label}
      </Button>
    </div>
  )
};

export default SecondButton;