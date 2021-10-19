import React, { useState } from 'react';
import { AddButton } from '../../atoms/Buttons/LightButtons';
import { StyledForm, StyledInput, StyledLabel } from '../../atoms/Form/Form';

const AddPrizeForm = (props) => {
  const initialFormState = { id: null, name: '', value: '' };
  const [prize, setPrize] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPrize({ ...prize, [name]: value });
  };

  return (
    <React.Fragment>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          if (!prize.name || !prize.value) return;

          props.addPrize(prize);
          setPrize(initialFormState);
        }}
      >
        <StyledLabel>Nagroda</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          value={prize.name}
          onChange={handleInputChange}
          required
        />

        <StyledLabel>Punkty</StyledLabel>
        <StyledInput
          type="number"
          name="value"
          value={prize.value}
          onChange={handleInputChange}
          required
        />
        <AddButton>Dodaj nową nagrodę</AddButton>
      </StyledForm>
    </React.Fragment>
  );
};

export default AddPrizeForm;
