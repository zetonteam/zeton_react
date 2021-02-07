import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
`;

const StudentTemplate = ({ children }) => (
  <StyledContainer>
    {children}
    {/* <StudentNavbar /> */}
  </StyledContainer>
);

export default StudentTemplate;
