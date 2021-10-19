import React, { useState } from 'react';
import { connect } from 'react-redux';
import HomeTemplate from '../../templates/HomeTemplate';
import Navbar from '../../structures/Navbar/Navbar';
import AwardsList from '../../structures/Awards/AwardsList';
import PointsList from '../../structures/Points/PointsList';
import StudentHeader from '../../structures/StudentHeader/StudentHeader';
import ButtonBar from '../../modules/ButtonBar/ButtonBar';
import MainBox from '../../atoms/Sections/MainBox';

const Settings = (props) => {
  const [showPrizes, setShowPrizes] = useState(false);
  const handlePrizes = () => setShowPrizes(!showPrizes);
  const [showPoints, setShowPoints] = useState(false);
  const handlePoints = () => setShowPoints(!showPoints);
  return (
    <HomeTemplate>
      <StudentHeader name={props.name} points={props.points} />
      <MainBox>
        <ButtonBar onClick={handlePrizes} text="Nagrody" />
        {showPrizes && <AwardsList />}
        <ButtonBar onClick={handlePoints} text="Zachowania" />
        {showPoints && <PointsList />}
        <ButtonBar text="Konsekwencje" />
        <ButtonBar text="Informacje o dziecku" />
        <ButtonBar text="Mój profil" />
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.student.first_name + ' ' + state.student.last_name,
    points: state.student.total_points,
  };
};

export default connect(mapStateToProps)(Settings);
