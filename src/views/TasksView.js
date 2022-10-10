import React from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import MainBox from '../components/atoms/Sections/MainBox';
import Navbar from '../components/structures/Navbar/Navbar';
import CustomSelect from '../components/modules/CustomSelect/CustomSelect';
import Loading from "../components/atoms/Loading/Loading";
import { StyledContainer } from '../components/atoms/Sections/Containers';
import {
  Subheading,
  StyledHeader,
  StyledHeading,
} from '../components/atoms/Heading/Heading';
// funkcje-hooki swr
import { useTasks } from "../api/useTasks";

const PointsView = () => {
  const { tasks, isTasksLoading, isTasksError } = useTasks("1");

  return (
    <HomeTemplate>
      <StyledHeader>
        <StyledHeading big>Dodaj punkty</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
        <Subheading>Otrzymane punkty</Subheading>
        {isTasksLoading && !isTasksError && <Loading />}
        {!isTasksLoading && !isTasksError &&
          <CustomSelect
            title="Wybierz zachowanie"
            data={tasks}
            btnTitle="Przyznaj punkty"
          />
          }
        </StyledContainer>
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

export default PointsView;
