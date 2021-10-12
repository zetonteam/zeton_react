import React from 'react';
import { connect } from 'react-redux';
import HomeTemplate from '../../templates/HomeTemplate';
import StudentHeader from '../../structures/StudentHeader/StudentHeader';
import MainBox from '../../atoms/Sections/MainBox';
import Navbar from '../../structures/Navbar/Navbar';
import AwardsBar from '../../structures/Awards/AwardsBar';

const Awards = ({ name, points, handlePanel, panel }) => {
  console.log(handlePanel);
  return (
    <HomeTemplate>
      <StudentHeader name={name} points={points} />
      <MainBox>
        <AwardsBar panel={panel} handlePanel={handlePanel} />
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
