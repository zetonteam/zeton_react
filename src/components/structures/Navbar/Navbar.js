import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import NavButton from "../../modules/NavButton/NavButton";

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  background-color: #4f4e3a;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 56px;
    flex-direction: row;
  }
`;

const Navbar = () => {
  let { id } = useParams();
  console.log(`${id}`);
  return (
    <StyledNavbar>
      <NavButton link={`/${id}`} text="Home" />
      <NavButton link={`/${id}/awards`} text="Nagrody" />
      <NavButton link={`/${id}/consequences`} text="Konsekwencje" />
      <NavButton link={`/${id}/info`} text="Info" />
      <NavButton link={`/${id}/settings`} text="Ustawienia" />
    </StyledNavbar>
  );
};

export default Navbar;
