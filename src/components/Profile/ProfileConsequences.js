import React, { useEffect, useState } from "react";
import PanelHeader from "../Header/PanelHeader";

const ProfileConsequences = ({ data, handlePanel, ...props }) => {


  return (
    <section className="profile__main">
      <PanelHeader text="Zastosuj konsekwencję" handlePanel={handlePanel}/>
    </section>)
}

export default ProfileConsequences;