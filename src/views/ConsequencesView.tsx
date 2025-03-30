import { useParams } from 'react-router-dom';
import React from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';
import StudentHeader from '../components/structures/StudentHeader/StudentHeader';
import Loading from '../components/atoms/Loading/Loading';
import { useStudent } from '../api/getStudent';

const ConsequencesView = () => {
  const { id } = useParams();

  const { student, isStudentLoading, isStudentError } = useStudent(id);
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
      <div>Consequences</div>
      <Navbar />
    </HomeTemplate>
  );
};

export default ConsequencesView;
