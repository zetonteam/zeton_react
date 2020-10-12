import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 270,
  },
}));

const Dropdown = (props) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>{props.selectValue}</InputLabel>
      <Select>
        <MenuItem value={props}>{props.item}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
