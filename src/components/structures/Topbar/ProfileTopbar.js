import React from "react";
import styled from "styled-components";

const StyledProfileTopbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    heigth: 40px;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
`;

const ProfileTopbar = () => {
    return (
      <StyledProfileTopbar>
        Awatar, Imię, Ikona, Punkty
      </StyledProfileTopbar>
    );
  };
  
export default ProfileTopbar;