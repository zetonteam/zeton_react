import React from 'react';
import HomeTemplate from '../../components/templates/HomeTemplate';
import StudentHeader from '../../components/structures/StudentHeader/StudentHeader';
import MainBox from '../../components/atoms/Sections/MainBox';
import Navbar from '../../components/structures/Navbar/Navbar';
import { StyledContainer } from '../../components/atoms/Sections/Containers';
import CustomSelect from '../../components/modules/CustomSelect/CustomSelect';
import Loading from "../../components/atoms/Loading/Loading";
// funkcje-hooki swr
import { useAwards } from "../../api/useAwards";

const Awards = () => {
  const { awards, isAwardsLoading, isAwardsError } = useAwards();

  return (
    <HomeTemplate>
      {/* <StudentHeader name={name} points={points} /> */}
      <MainBox>
        <StyledContainer>
        {isAwardsLoading && !isAwardsError && <Loading />}
        {!isAwardsLoading && !isAwardsError &&
          <CustomSelect
            title="Wybierz nagrodę"
            data={awards}
            btnTitle="Przyznaj nagrodę"
          />
          }
        </StyledContainer>
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state.student);
//   return {
//     name: state.student.first_name + ' ' + state.student.last_name,
//     points: state.student.total_points,
//   };
// };

export default Awards;
