import React, { Component } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import BasicButton from "../UI/Button/BasicButton";
import AddButton from "../UI/Button/AddButton";

const Home = ({ children }) => {

  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={1}>
        <Typography variant="h4">Cześć Marku</Typography>
        <Typography variant="p">wybierz podopiecznego</Typography>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
        <Typography variant="h5"></Typography>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={1}>
        <AddButton
          label="Dodaj podopiecznego"
        />
        <AddButton
          label="Dodaj opiekuna"
        />
      </Box>
    </Container>
  )

}

export default Home;