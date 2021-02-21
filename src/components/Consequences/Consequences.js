import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";
import { Container, Box, Typography, Avatar } from '@material-ui/core';
import SecondButton from "../UI/Button/SecondButton";
import "../Profile/Profile.css";

const Consequences = ({ data, handlePanel, ...props }) => {

  return (
    <section className="profile__main">
      <PanelHeader text="Konsekwencje" />
      <article className="profile__body">
        <Box>



        </Box>

      </article>
    </section>)
}

export default Consequences;