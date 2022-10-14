import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Buttons/Button';
import StudentHeader from '../structures/StudentHeader/StudentHeader';
import { ROUTE_NAME } from '../../const/routing.const';
import TasksBar from '../structures/Tasks/TasksBar';

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const StudentTemplate = ({ name, points, studentId }) => {
  const [actualPanel, setActualPanel] = useState('none');

  const handlePanel = (event) => {
    setActualPanel(event);
  };

  return (
    <>
      <StudentHeader name={name} points={points} />
      <StyledButtonsGroup>
        <Button onClick={() => handlePanel('tasks')}>Dodaj punkty</Button>
        {/* <Link to={ROUTE_NAME.tasks.replace(':id', studentId)}>
          <Button onClick={() => handlePanel('tasks')}>Dodaj punkty</Button>
        </Link> */}
        <Link to={ROUTE_NAME.awards.replace(':id', studentId)}>
          <Button outline onClick={() => handlePanel('awards')}>
            Przyznaj nagrodę
          </Button>
        </Link>
        <Link to={ROUTE_NAME.consequences.replace(':id', studentId)}>
          <Button outline onClick={() => handlePanel('consequences')}>Daj konsekwencję</Button>
        </Link>
      </StyledButtonsGroup>
      <TasksBar panel={actualPanel} handlePanel={handlePanel} />
    </>
  );
};

export default StudentTemplate;
