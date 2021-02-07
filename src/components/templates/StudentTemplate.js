import React from "react";
import styled from "styled-components";
import Button from "../atoms/Buttons/Button";

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StudentTemplate = ({ name }) => (
  <>
    <h1>{name}</h1>
    {/* add StudentHeader, StudentButtonsGroup, StudentNavbar */}
    <StyledButtonsGroup>
      <Button>Dodaj punkty</Button>
      <Button outline>Przyznaj nagrodę</Button>
      <Button outline>Daj konsekwencję</Button>
    </StyledButtonsGroup>
  </>
);

export default StudentTemplate;
