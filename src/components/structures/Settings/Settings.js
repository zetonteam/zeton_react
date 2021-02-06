import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";
import { Container, Box, Typography, Avatar } from '@material-ui/core';
import SecondButton from "../../atoms/Button/SecondButton";
import "../Profile/Profile.css";

const Settings = ({ data, handlePanel, ...props }) => {

  return (
    <section className="profile__main">
      <PanelHeader text="Ustawienia" />
      <article className="profile__body">
        <Box>



        </Box>

      </article>
    </section>)
}

export default Settings;