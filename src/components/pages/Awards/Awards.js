import React from 'react';
import { connect } from 'react-redux';
import HomeTemplate from '../../templates/HomeTemplate';
import StudentHeader from '../../structures/StudentHeader/StudentHeader';
import MainBox from '../../atoms/Sections/MainBox';
import Navbar from '../../structures/Navbar/Navbar';
import { StyledContainer } from '../../atoms/Sections/Containers';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { data } from '../../../mockyClient';

const Awards = ({ name, points }) => {
  const handleAwardSelect = (award) => {
    console.log("Awards", award);

    // po wybraniu nagrody chcemy ja zapisac do bazy
    // mozemy to zrobic za pomoca:
    fetch("/api/foo", { method: "POST", body: JSON.stringify(award )});
  };

  return (
    <HomeTemplate>
      <StudentHeader name={name} points={points} />
      <MainBox>
        <StyledContainer>
          <CustomSelect
            title="Wybierz nagrodę"
            data={data}
            btnTitle="Przyznaj nagrodę"
            onSelect={handleAwardSelect}
          />
        </StyledContainer>
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

const mapStateToProps = (state) => {
  console.log(state.student);
  return {
    name: state.student.first_name + ' ' + state.student.last_name,
    points: state.student.total_points,
  };
};

export default connect(mapStateToProps)(Awards);
