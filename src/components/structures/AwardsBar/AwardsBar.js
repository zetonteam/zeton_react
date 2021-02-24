import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReturnButton from "../../atoms/Buttons/ReturnButton";
import Heading from "../../atoms/Heading/Heading";
import ActionsTemplate from "../../templates/ActionsTemplate";
import AddButton from "../../atoms/Buttons/AddButton";
import Button from "../../atoms/Buttons/Button";
import LiElement from "../../atoms/Lists/LiElement";
import Select from "../../atoms/Accordion/Select";

const StyledContainer = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 60vh;
  margin-top: 40px;
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

const AwardsBar = ({ points, handlePanel, panel }) => {
  const [activePanel, setActivePanel] = useState(panel);
  const awards = [
    { id: 1, text: "Paczka czipsów", point: 5 },
    { id: 2, text: "Wyjście do kina", point: 20 },
    { id: 3, text: "Godzina gry komputerowej", point: 10 }
  ]

  useEffect(() => {
    setActivePanel(panel);
  }, [panel]);


  return (
    <ActionsTemplate action={activePanel === "awards" ? "true" : "false"}>
      <StyledHeader>
        <ReturnButton onClick={() => handlePanel("none")} />
        <StyledHeading big>Przyznaj nagrodę</StyledHeading>
      </StyledHeader>
      <StyledContainer>
        <div>Accordion</div>
        <Select>
          <option value="">Wybierz nagrodę</option>
          {awards.map((award) => (
            <option key={award.id} value={award.id}>{award.text} -{award.point} pkt</option>
          ))}
        </Select>


        <AddButton>Dodaj nową nagrodę</AddButton>
        <Button>Dodaj</Button>
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default AwardsBar;
