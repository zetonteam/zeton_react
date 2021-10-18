import React from 'react';
import AwardForm from './AddPrizeForm';

const AddAward = () => {
  const handleOnSubmit = (award) => {
    console.log(award);
  };
  return (
    <React.Fragment>
      <AwardForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAward;
