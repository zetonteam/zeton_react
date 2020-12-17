import React, { Component } from 'react';
import { Box, Container, Typography, List } from '@material-ui/core';
import ChildItem from "../UI/List/ChildItem";
import AddButton from "../UI/Button/AddButton";

const Home = ({ children }) => {

  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={1}>
        <Typography variant="h4">Cześć Marku</Typography>
        <Typography variant="p">wybierz podopiecznego</Typography>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
        <List component="nav">
          {children && children.map(item => <ChildItem data={item}/>)}
        </List>
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