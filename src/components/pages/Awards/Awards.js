import React from 'react';
import { connect } from 'react-redux';
import HomeTemplate from '../../templates/HomeTemplate';
import StudentHeader from '../../structures/StudentHeader/StudentHeader';
import MainBox from '../../atoms/Sections/MainBox';
import Navbar from '../../structures/Navbar/Navbar';
import { StyledContainer } from '../../structures/Awards/AwardsBar';
import CustomSelect from '../../modules/CustomSelect/CustomSelect';
import { data } from '../../../mockyClient';

const Awards = ({ name, points }) => {
  return (
    <HomeTemplate>
      <StudentHeader name={name} points={points} />
      <MainBox>
        <StyledContainer>
          <CustomSelect
            title="Wybierz nagrodę"
            data={data}
            btnTitle="Przyznaj nagrodę"
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
