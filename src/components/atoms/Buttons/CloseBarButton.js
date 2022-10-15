import React from 'react';
import styled from "styled-components";
import ARROW_ICON from "../../../images/icons/arrow_back-24px.svg";
import EXIT_ICON from "../../../images/icons/exit.svg";

const StyledCloseBarButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.background};
  border: none;
  height: 50px;
  transition: 0.2s;
  // background-image: url( ${({ exit }) => exit ? EXIT_ICON : ARROW_ICON});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  font-size: 2rem;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    height: 40px;
  }
`;

const CloseBarButton = ({closePanel}) => {

  return <StyledCloseBarButton onClick={() => closePanel('none')}>
    <img src={ARROW_ICON} alt=""/>
    Powrót
  </StyledCloseBarButton>
}

export default CloseBarButton;
