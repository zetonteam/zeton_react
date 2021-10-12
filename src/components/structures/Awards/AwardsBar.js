import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import { Heading } from '../../atoms/Heading/Heading';
import ActionsTemplate from '../../templates/ActionsTemplate';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { data } from '../../../mockyClient';

export const StyledContainer = styled.main`
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
        <CustomSelect
          title="Wybierz nagrodę"
          data={data}
          btnTitle="Przyznaj nagrodę"
        />
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default AwardsBar;
