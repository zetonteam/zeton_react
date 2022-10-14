import React, { useState } from 'react';
import { AddButton } from '../../atoms/Buttons/LightButtons';
import { StyledForm, StyledInput, StyledLabel } from '../../atoms/Form/Form';

const AddPointsForm = (props) => {
  const initialFormState = { id: null, name: '', value: '' };
  const [task, setTask] = useState(initialFormState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        if (!task.name || !task.value) return;
        props.addTask(task);
        setTask(initialFormState);
      }}
    >
      <StyledLabel>Zachowanie</StyledLabel>
      <StyledInput
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        required
      />
      <StyledLabel>Punkty</StyledLabel>
      <StyledInput
        type="number"
        name="value"
        value={task.value}
        onChange={handleInputChange}
        required
      />
      <AddButton>Dodaj zachowanie</AddButton>
    </StyledForm>
  );
};

export default AddPointsForm;
