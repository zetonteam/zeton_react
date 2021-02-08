import React from "react";
import styled from "styled-components";
import ReturnButton from "../atoms/Buttons/ReturnButton";
import Heading from "../atoms/Heading/Heading";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 0 20px;
`;

const PointsTemplate = ({ points, handlePanel }) => (
  <StyledContainer>
    <StyledHeader>
      <ReturnButton onClick={() => handlePanel("dashboard")} />
      <StyledHeading big>Dodaj punkty</StyledHeading>
    </StyledHeader>
  </StyledContainer>
);

export default PointsTemplate;
