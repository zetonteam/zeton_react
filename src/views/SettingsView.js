import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';
import AwardsList from '../components/structures/Awards/AwardsList';
import PointsList from '../components/structures/Tasks/PointsList';
import StudentHeader from '../components/structures/StudentHeader/StudentHeader';
import ButtonBar from '../components/modules/ButtonBar/ButtonBar';
import MainBox from '../components/atoms/Sections/MainBox';
import Loading from '../components/atoms/Loading/Loading';

import { useStudentById } from '../api/useStudentById';
import { useAwards } from '../api/useAwards';
import { useTasks } from '../api/useTasks';


const SettingsView = () => {
  let { id } = useParams();
  
  const {student, isStudentLoading, isStudentError} = useStudentById(id)
  const { awards, isAwardsLoading, isAwardsError} = useAwards(id)
  const { tasks, isTasksLoading, isTasksError} = useTasks(id)
  
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
      }
    
      <MainBox>
        <ButtonBar onClick={handlePrizes} text="Nagrody" />
        {isAwardsLoading && !isAwardsError && <Loading />}
        {showPrizes && <AwardsList awards={awards} studentId={id} />}
        <ButtonBar onClick={handlePoints} text="Zachowania" />
        {isTasksLoading && !isTasksError && <Loading />}
        {showPoints && <PointsList tasksList={tasks} studentId={id} />}
        <ButtonBar text="Konsekwencje" />
        <ButtonBar text="Informacje o dziecku" />
        <ButtonBar text="Mój profil" />
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

export default SettingsView
