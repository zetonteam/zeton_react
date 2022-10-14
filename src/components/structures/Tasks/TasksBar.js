import React, { useState, useEffect } from 'react';
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import {
  Subheading,
  StyledHeader,
  StyledHeading,
} from '../../atoms/Heading/Heading';
import ActionsTemplate from '../../templates/ActionsTemplate';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { StyledContainer } from '../../atoms/Sections/Containers';
import { tasksData } from '../../../mockyClient'; //tu podczepić swr, który da taskdata - z TasksView

const TasksBar = ({ points, handlePanel, panel }) => {
  const [activePanel, setActivePanel] = useState(panel);

  useEffect(() => {
    setActivePanel(panel);
  }, [panel]);

  return (
    <ActionsTemplate action={activePanel === 'tasks' ? 'true' : 'false'}>
      <StyledHeader>
        <ReturnButton onClick={() => handlePanel('none')} />
        <StyledHeading big>Dodaj punkty</StyledHeading>
      </StyledHeader>
      <StyledContainer>
        <Subheading>Otrzymane punkty</Subheading>
        <CustomSelect
          title="Wybierz zachowanie"
          data={tasksData}
          btnTitle="Przyznaj punkty"
        />
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default TasksBar;
