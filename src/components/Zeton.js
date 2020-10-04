import React, { useState } from 'react';
import { removeUser } from '../auth'

const Zeton = ({ profile }) => {

  const logOut = () => {
    removeUser();
    return null
  }

  return (
    <>
      <h1>Zalogowałeś się! Jesteś super!</h1>
      {profile === 'private' && <button className="adm-link" onClick={logOut}>Wyloguj</button>}
    </>
  )
}

export default Zeton;