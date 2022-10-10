import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';
import AwardsList from '../components/structures/Awards/AwardsList';
import PointsList from '../components/structures/Points/PointsList';
import StudentHeader from '../components/structures/StudentHeader/StudentHeader';
import ButtonBar from '../components/modules/ButtonBar/ButtonBar';
import MainBox from '../components/atoms/Sections/MainBox';
import { useStudentById } from '../api/useStudentById';
import Loading from '../components/atoms/Loading/Loading';


const SettingsView = () => {
  let { id } = useParams();
  
  const {student, isStudentLoading, isStudentError} = useStudentById(id)
  console.log(student)
  
  const [showPrizes, setShowPrizes] = useState(false);
  const handlePrizes = () => setShowPrizes(!showPrizes);
  const [showPoints, setShowPoints] = useState(false);
  const handlePoints = () => setShowPoints(!showPoints);
  return (
    <HomeTemplate>
      {isStudentLoading && !isStudentError && <Loading />}
      {!isStudentLoading && !isStudentError &&
     <StudentHeader name={student?.first_name}
     points={student?.total_points}
     studentId={id} />
      }s
    
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

export default SettingsView
