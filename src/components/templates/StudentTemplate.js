import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Buttons/Button";
import StudentHeader from "../structures/StudentHeader/StudentHeader";
import PointsBar from "../structures/PointsBar/PointsBar";
import AwardsBar from "../structures/AwardsBar/AwardsBar";

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const StudentTemplate = ({ name, points }) => {
  const [actualPanel, setActualPanel] = useState("none");

  const handlePanel = (event) => {
    setActualPanel(event);
  };

  return (
    <>
      <StudentHeader name={name} points={points} />
      <StyledButtonsGroup>
        <Button onClick={() => handlePanel("points")}>Dodaj punkty</Button>
        <Button outline onClick={() => handlePanel("awards")}>
          Przyznaj nagrodę
        </Button>
        <Button outline>Daj konsekwencję</Button>
      </StyledButtonsGroup>
      <PointsBar panel={actualPanel} handlePanel={handlePanel} />
      <AwardsBar panel={actualPanel} handlePanel={handlePanel} />
    </>
  );
};

export default StudentTemplate;
