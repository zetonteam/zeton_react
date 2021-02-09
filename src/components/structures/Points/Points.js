import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReturnButton from "../../atoms/Buttons/ReturnButton";
import Heading from "../../atoms/Heading/Heading";
import ActionsTemplate from "../../templates/ActionsTemplate";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledHeading = styled(Heading)`
  margin: 0 0 0 20px;
`;

const Points = ({ points, handlePanel, panel }) => {
  const [activePanel, setActivePanel] = useState(panel);

  useEffect(() => {
    setActivePanel(panel);
  }, [panel]);

  return (
    <ActionsTemplate action={activePanel === "points" ? "true" : "false"}>
      <StyledHeader>
        <ReturnButton onClick={() => handlePanel("none")} />
        <StyledHeading big>Dodaj punkty</StyledHeading>
      </StyledHeader>
    </ActionsTemplate>
  );
};

export default Points;
