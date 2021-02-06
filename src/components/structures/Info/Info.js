import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";
import { Container, Box, Typography, Avatar } from '@material-ui/core';
import SecondButton from "../../atoms/Button/SecondButton";
import "../structures/Profile/Profile.css";

const Info = ({ data, handlePanel, ...props }) => {

  return (
    <section className="profile__main">
      <PanelHeader text="Informacje" />
      <article className="profile__body">
        <Box>

        <Typography variant="body1">Imię i nazwisko</Typography>


        </Box>

        <Box>

          <SecondButton
            label="O DZIECKU"
          />

          <SecondButton
            label="SYSTEM ŻETONOWY"
          />

        </Box>

      </article>
    </section>)
}

export default Info;