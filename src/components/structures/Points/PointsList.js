import React, { useState } from 'react';
import { Heading, Subheading } from '../../atoms/Heading/Heading';
import { StyledArticle } from '../../atoms/Sections/Article';
import MainBox from '../../atoms/Sections/MainBox';

import LiElement, { StyledUl } from '../../atoms/Lists/Lists';
import AddPointsForm from './AddPointsForm';
import EditPointsForm from './EditPointsForm';

const PointsList = ({tasksList}) => {
  const [tasks, setTasks] = useState(tasksList);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: '', value: '' };
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setEditing(false);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const editTask = (task) => {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      name: task.text,
      value: task.points,
    });
  };

  return (
    <MainBox>
      <StyledArticle>
        <Heading>Lista zachowań</Heading>
        <StyledUl>
          {tasks.map((task) => {
            const { name, value, id } = task;
            return (
              <LiElement
                text={name}
                points={value}
                key={id}
                id={id}
                delete={deleteTask}
                edit={editTask}
              />
            );
          })}
        </StyledUl>
      </StyledArticle>
      {editing ? (
        <StyledArticle>
          <Subheading>Edytuj zachowanie</Subheading>
          <EditPointsForm
            setEditing={setEditing}
            currentTask={currentTask}
            updateTask={updateTask}
          />
        </StyledArticle>
      ) : (
        <StyledArticle>
          <Subheading>Dodaj nowe zachowanie</Subheading>
          <AddPointsForm addTask={addTask} />
        </StyledArticle>
      )}
    </MainBox>
  );
};

export default PointsList;
