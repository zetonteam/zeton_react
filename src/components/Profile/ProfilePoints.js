import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";

const ProfilePoints = ({ data, handlePanel, ...props }) => {


  return (
    <section className="profile__main">
      <PanelHeader text="Dodaj punkty" handlePanel={handlePanel}/>
    </section>)
}

export default ProfilePoints;