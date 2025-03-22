import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HomeTemplate from '../../components/templates/HomeTemplate';
import StudentHeader from '../../components/structures/StudentHeader/StudentHeader';
import Loading from '../../components/atoms/Loading/Loading';
import Navbar from '../../components/structures/Navbar/Navbar';
import { useStudentById } from '../../api/useStudentById';
import Button from '../../components/atoms/Buttons/Button';
import { AWARDS_SUB_ROUTES } from '../../const/routing.const';

const AwardsView = () => {
  const { id } = useParams();
  const { student, isStudentLoading, isStudentError } = useStudentById(id);

  const navigate = useNavigate();

  if (isStudentError) return null;
  if (isStudentLoading) return <Loading />;

  return (
    <HomeTemplate>
      <StudentHeader
        name={student?.first_name}
        points={student?.total_points}
        studentId={id}
      />
      <Button onClick={() => navigate(`.${AWARDS_SUB_ROUTES.add}`)}>
        Dodaj nagrodę
      </Button>
      <Button onClick={() => navigate(`.${AWARDS_SUB_ROUTES.grant}`)}>
        Przyznaj nagrodę
      </Button>
      <Button onClick={() => navigate(`.${AWARDS_SUB_ROUTES.list}`)}>
        Pokaż listę nagród
      </Button>
      <Navbar />
    </HomeTemplate>
  );
};

export default AwardsView;
