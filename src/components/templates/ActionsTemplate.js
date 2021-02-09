import React from "react";
import styled from "styled-components";

const StyledActionsTemplate = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 1s;
  transform: ${({ action }) =>
    action === "true" ? "translateX(0)" : "translateX(100vh)"};
  z-index: 99;
`;

const ActionsTemplate = ({ children, action }) => (
  <StyledActionsTemplate action={action}>{children}</StyledActionsTemplate>
);

export default ActionsTemplate;
