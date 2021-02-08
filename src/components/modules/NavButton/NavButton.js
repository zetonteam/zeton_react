import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import DEFAULT_IMAGE from "../../../images/icons/profile-user.svg";

const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) =>
  theme.mediaMaxSize.xs}) {
    flex: 1;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

const StyledIcon = styled.img`
  height: 30px;
  width: 30px;

  @media only screen and (max-width: ${({ theme }) =>
  theme.mediaMaxSize.xs}) {
    height: 20px;
    width: 20px;
  }
`;

const NavButton = ({ link, image, text }) => (
  <StyledNavLink to={link}>
    <StyledIcon src={image ? image : DEFAULT_IMAGE} />
    <StyledParagraph>{text}</StyledParagraph>
  </StyledNavLink>
);

export default NavButton;
