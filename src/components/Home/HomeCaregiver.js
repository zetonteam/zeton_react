import React, { Component } from 'react';
import { Box, Container, Typography, List } from '@material-ui/core';
import ChildItem from "../UI/List/ChildItem";
import AddButton from "../UI/Button/AddButton";

const Home = ({ data }) => {

  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={1}>
        <Typography variant="h5">Cześć Marku</Typography>
        <Typography variant="body1">wybierz podopiecznego</Typography>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" padding={1}>
        <List component="nav">
          {data && data.map(item => <ChildItem key={item.username.toString()} data={item}/>)}
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