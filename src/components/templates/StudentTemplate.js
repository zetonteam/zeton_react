import React from "react";
import styled from "styled-components";
import Button from "../atoms/Buttons/Button";
import StudentHeader from "../structures/StudentHeader/StudentHeader";

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const StudentTemplate = ({ name, points }) => (
  <>
    <StudentHeader name={name} points={points} />
    {/* add StudentHeader, StudentButtonsGroup, StudentNavbar */}
    <StyledButtonsGroup>
      <Button>Dodaj punkty</Button>
      <Button outline>Przyznaj nagrodę</Button>
      <Button outline>Daj konsekwencję</Button>
    </StyledButtonsGroup>
  </>
);

export default StudentTemplate;
