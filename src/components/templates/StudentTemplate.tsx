import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Button from '../atoms/Buttons/Button';
import StudentHeader from '../structures/StudentHeader/StudentHeader';
import { ROUTE_NAME } from '../../const/routing.const';
import TasksBar from '../structures/Tasks/TasksBar';
import { type StudentData } from '@/components/templates/types.ts';

const StyledButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

interface StudentTemplateProps {
  name?: string;
  points?: number;
  image?: string;
  studentId?: string;
}

const StudentTemplate = ({
  name,
  points,
  image,
  studentId,
}: StudentTemplateProps) => {
  const [actualPanel, setActualPanel] = useState('none');
  const [studentData, setStudentData] = useState<StudentData>({
    name: null,
    points: null,
    image: null,
  });

  const handlePanel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setActualPanel(event);
  };
  //TODO review
  useEffect(() => {
    setStudentData({
      name: name || null,
      points: points || null,
      image: image || null,
    });
  }, [name, points, image]);

  return (
    <>
      <StudentHeader name={name} points={points} />
      <StyledButtonsGroup>
        <Button onClick={() => handlePanel('tasks')}>Dodaj punkty</Button>
        {/* <Link to={ROUTE_NAME.tasks.replace(':id', studentId)}>
          <Button onClick={() => handlePanel('tasks')}>Dodaj punkty</Button>
        </Link> */}
        <Link to={ROUTE_NAME.awards.replace(':id', studentId)}>
          <Button outline={'true'} onClick={() => handlePanel('awards')}>
            Przyznaj nagrodę
          </Button>
        </Link>
        <Link to={ROUTE_NAME.consequences.replace(':id', studentId)}>
          <Button outline={'true'} onClick={() => handlePanel('consequences')}>
            Daj konsekwencję
          </Button>
        </Link>
      </StyledButtonsGroup>
      <TasksBar
        panel={actualPanel}
        handlePanel={handlePanel}
        studentData={studentData}
      />
    </>
  );
};

export default StudentTemplate;
