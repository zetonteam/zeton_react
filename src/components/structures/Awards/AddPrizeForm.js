import React, { useState } from 'react';
import { AddButton } from '../../atoms/Buttons/LightButtons';

const AddPrizeForm = (props) => {
  const initialFormState = { id: null, text: '', points: '' };
  const [prize, setPrize] = useState(initialFormState);
  const [flag, setFlag] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPrize({ ...prize, [name]: value });
  };

  return (
    <React.Fragment>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={(event) => {
          event.preventDefault();
          if (!prize.text || !prize.points) return;

          props.addPrize(prize);
          setPrize(initialFormState);
        }}
      >
        <label>Nagroda</label>
        <input
          type="text"
          name="text"
          value={prize.text}
          onChange={handleInputChange}
        />

        <label>Punkty</label>
        <input
          type="number"
          name="points"
          value={prize.points}
          onChange={handleInputChange}
        />
        <AddButton>Dodaj nową nagrodę</AddButton>
      </form>
    </React.Fragment>
  );
};

export default AddPrizeForm;
