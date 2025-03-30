import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';
import AwardsList from '../components/structures/Awards/AwardsList';
import PointsList from '../components/structures/Tasks/PointsList';
import StudentHeader from '../components/structures/StudentHeader/StudentHeader';
import ButtonBar from '../components/modules/ButtonBar/ButtonBar';
import MainBox from '../components/atoms/Sections/MainBox';
import Loading from '../components/atoms/Loading/Loading';
import { getStudent } from '../api/getStudent';
import { useAwards } from '../api/Award/useAwards';
import { useTasks } from '../api/getTasks';

const SettingsView = () => {
  const { id } = useParams();

  const { student, isStudentLoading, isStudentError } = useStudent(id);
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);
  const { tasks, isTasksLoading, isTasksError } = useTasks(id);

  const [showPrizes, setShowPrizes] = useState<boolean>(false);
  //const handlePrizes = () => setShowPrizes(!showPrizes);
  const [showPoints, setShowPoints] = useState<boolean>(false);
  //const handlePoints = () => setShowPoints(!showPoints);
  return (
    <HomeTemplate>
      {isStudentLoading && !isStudentError && <Loading />}
      {!isStudentLoading && !isStudentError && (
        <StudentHeader
          name={student?.first_name}
          points={student?.total_points}
          studentId={id}
        />
      )}

      <MainBox>
        <ButtonBar onClick={() => setShowPrizes(!showPrizes)} text="Nagrody" />
        {isAwardsLoading && !isAwardsError && <Loading />}
        {showPrizes && <AwardsList awards={awards} studentId={id} />}
        <ButtonBar
          onClick={() => setShowPoints(!showPoints)}
          text="Zachowania"
        />
        {isTasksLoading && !isTasksError && <Loading />}
        {showPoints && <PointsList tasksList={tasks} studentId={id} />}
        <ButtonBar text="Konsekwencje" onClick={undefined} />
        <ButtonBar text="Informacje o dziecku" onClick={undefined} />
        <ButtonBar text="Mój profil" onClick={undefined} />
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

export default SettingsView;
