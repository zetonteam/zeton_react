import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import NavButton from "../../modules/NavButton/NavButton";
import HOME_ICON from "../../../images/icons/home-24px.svg";
import INFO_ICON from "../../../images/icons/person-24px.svg";
import CONSEQUENCES_ICON from "../../../images/icons/sentiment_very_dissatisfied-24px.svg";
import SETTINGS_ICON from "../../../images/icons/settings-24px.svg";
import AWARD_ICON from "../../../images/icons/trophy.svg";

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
      <NavButton link={`/${id}`} text="Home" image={HOME_ICON} />
      <NavButton link={`/${id}/awards`} text="Nagrody" image={AWARD_ICON} />
      <NavButton
        link={`/${id}/consequences`}
        text="Konsekwencje"
        image={CONSEQUENCES_ICON}
      />
      <NavButton link={`/${id}/info`} text="Info" image={INFO_ICON} />
      <NavButton
        link={`/${id}/settings`}
        text="Ustawienia"
        image={SETTINGS_ICON}
      />
    </StyledNavbar>
  );
};

export default Navbar;
