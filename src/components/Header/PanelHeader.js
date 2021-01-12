import React, { useEffect, useState } from "react";
import { Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const PanelHeader = ({ text, panelNumber, handlePanel, ...props }) => {

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <IconButton aria-label="back" onClick={() => handlePanel(panelNumber)}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h5" align="left">{text}</Typography>
    </Box>
  )
}

export default PanelHeader;

