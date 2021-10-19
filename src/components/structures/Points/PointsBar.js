import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import { Heading } from '../../atoms/Heading/Heading';
import ActionsTemplate from '../../templates/ActionsTemplate';
import { AddButton } from '../../atoms/Buttons/LightButtons';
import Button from '../../atoms/Buttons/Button';

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

const PointsBar = ({ points, handlePanel, panel }) => {
  const [activePanel, setActivePanel] = useState(panel);

  useEffect(() => {
    setActivePanel(panel);
  }, [panel]);

  return (
    <ActionsTemplate action={activePanel === 'points' ? 'true' : 'false'}>
      <StyledHeader>
        <ReturnButton onClick={() => handlePanel('none')} />
        <StyledHeading big>Dodaj punkty</StyledHeading>
      </StyledHeader>
      <StyledContainer>
        <div>Accordion</div>
        <AddButton>Dodaj nowe zachowanie</AddButton>
        <Button>Dodaj</Button>
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default PointsBar;
