import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";

const ProfilePoints = ({ data, handlePanel, ...props }) => {


  return (
    <section className="profile__main">
      <PanelHeader text="Dodaj punkty" panelNumber="0" handlePanel={handlePanel}/>
    </section>)
}

export default ProfilePoints;