import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import DEFAULT_IMAGE from "../../../images/icons/profile-user.svg";

const StyledNavLink = styled(NavLink)`
  width: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 5px;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    flex: 1;
    width: 100%;
    margin: 0 5px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  width: 60px;
`;

const StyledIcon = styled.img`
  height: 30px;
  width: 30px;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
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
