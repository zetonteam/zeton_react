import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReturnButton from '../../atoms/Buttons/ReturnButton';
import {
  Subheading,
  StyledHeader,
  StyledHeading,
} from '../../atoms/Heading/Heading';
import Loading from "../../atoms/Loading/Loading";
import ActionsTemplate from '../../templates/ActionsTemplate';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { StyledContainer } from '../../atoms/Sections/Containers';
import { useTasks } from "../../../api/useTasks";

const TasksBar = ({ points, handlePanel, panel }) => {
  let { id } = useParams();
  const [activePanel, setActivePanel] = useState(panel);
  const { tasks, isTasksLoading, isTasksError } = useTasks(id);
  // console.log(tasks);

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
        {isTasksLoading && !isTasksError && <Loading />}
        {!isTasksLoading && !isTasksError && (
          <CustomSelect
            title="Wybierz zachowanie"
            data={tasks.filter((task) => task.student == id)}
            btnTitle="Przyznaj punkty"
          />
        )}
      </StyledContainer>
    </ActionsTemplate>
  );
};

export default TasksBar;
