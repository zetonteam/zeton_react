import React from 'react';
import { useParams } from "react-router-dom";

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
import { useAwards } from "../api/useAwards";

const AwardsView = () => {
  let { id } = useParams();
  const { awards, isAwardsLoading, isAwardsError } = useAwards(id);

  return (
    <HomeTemplate>
      <StyledHeader>
        <StyledHeading big>Przyznaj nagrodę</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
        <Subheading>Wykorzystane punkty</Subheading>
        {isAwardsLoading && !isAwardsError && <Loading />}
        {!isAwardsLoading && !isAwardsError &&
          <CustomSelect
            title="Wybierz nagrodę"
            data={awards.filter(award => award.student == id)}
            btnTitle="Przyznaj nagrodę"
          />
          }
        </StyledContainer>
      </MainBox>
      <Navbar />
    </HomeTemplate>
  );
};

export default AwardsView;
