import React, { useState, useEffect } from 'react';
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import {
  Subheading,
  StyledHeader,
  StyledHeading,
} from '../../atoms/Heading/Heading';
import ActionsTemplate from '../../templates/ActionsTemplate';
import { StyledContainer } from '../../atoms/Sections/Containers';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { data } from '../../../mockyClient';

const AwardsBar = ({ points, handlePanel, panel }) => {
  const [activePanel, setActivePanel] = useState(panel);

  const handleAwardSelect = (award) => {
    console.log("AwardsBar", award);

    // po wybraniu nagrody chcemy ja zapisac do bazy
    // mozemy to zrobic za pomoca:
    fetch("/api/foo", { method: "POST", body: JSON.stringify(award)}); // dodajcie prawdziwą ściezke api + sprawdzie czy dobre dane sa wysylane
  };

  useEffect(() => {
    setActivePanel(panel);
  }, [panel]);

  return (
    <ActionsTemplate action={activePanel === 'awards' ? 'true' : 'false'}>
      <StyledHeader>
        <ReturnButton onClick={() => handlePanel('none')} />
        <StyledHeading big>Przyznaj nagrodę</StyledHeading>
      </StyledHeader>
      <StyledContainer>
        <Subheading>Wykorzystane punkty</Subheading>
        <CustomSelect
          title="Wybierz nagrodę"
          data={data}
          btnTitle="Przyznaj nagrodę"
          onSelect={handleAwardSelect}
        />
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default AwardsBar;
