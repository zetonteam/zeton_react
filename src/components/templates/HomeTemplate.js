import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
`;

const HomeTemplate = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default HomeTemplate;
