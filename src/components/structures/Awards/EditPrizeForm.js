import React, { useState, useEffect } from 'react';
import { AddButton, DeleteButtonText } from '../../atoms/Buttons/LightButtons';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRow,
} from '../../modules/From/Form';

const EditPrizeForm = (props) => {
  const [prize, setPrize] = useState(props.currentPrize);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPrize({ ...prize, [name]: value });
  };

  useEffect(() => {
    setPrize(props.currentPrize);
  }, [props]);

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        props.updatePrize(prize.id, prize);
      }}
    >
      <StyledLabel>Nagroda</StyledLabel>
      <StyledInput
        type="text"
        name="text"
        value={prize.text}
        onChange={handleInputChange}
      />
      <StyledLabel>Punkty</StyledLabel>
      <StyledInput
        type="number"
        name="points"
        value={prize.points}
        onChange={handleInputChange}
      />
      <StyledRow>
        <AddButton>Edytuj nagrodę</AddButton>
        <DeleteButtonText onClick={() => props.setEditing(false)}>
          Anuluj
        </DeleteButtonText>
      </StyledRow>
    </StyledForm>
  );
};

export default EditPrizeForm;
