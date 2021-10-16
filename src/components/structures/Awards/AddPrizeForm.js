import React, { useState } from 'react';
import { AddButton } from '../../atoms/Buttons/LightButtons';
import { StyledForm, StyledInput, StyledLabel } from '../../modules/From/Form';

const AddPrizeForm = (props) => {
  const initialFormState = { id: null, text: '', points: '' };
  const [prize, setPrize] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPrize({ ...prize, [name]: value });
  };

  return (
    <React.Fragment>
      <StyledForm
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={(event) => {
          event.preventDefault();
          if (!prize.text || !prize.points) return;

          props.addPrize(prize);
          setPrize(initialFormState);
        }}
      >
        <StyledLabel>Nagroda</StyledLabel>
        <StyledInput
          type="text"
          name="text"
          value={prize.text}
          onChange={handleInputChange}
          required
        />

        <StyledLabel>Punkty</StyledLabel>
        <StyledInput
          type="number"
          name="points"
          value={prize.points}
          onChange={handleInputChange}
          required
        />
        <AddButton>Dodaj nową nagrodę</AddButton>
      </StyledForm>
    </React.Fragment>
  );
};

export default AddPrizeForm;
