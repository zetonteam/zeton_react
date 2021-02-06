import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";

const ProfileAwards = ({ data, handlePanel, ...props }) => {


  return (
    <section className="profile__main">
      <PanelHeader text="Przyznaj nagrodę" handlePanel={handlePanel}/>
    </section>)
}

export default ProfileAwards;