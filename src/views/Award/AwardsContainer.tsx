import React from 'react';

import { StyledContainer } from '../../components/templates/HomeTemplate';
import MainBox from '../../components/atoms/Sections/MainBox';
import {
  StyledHeader,
  StyledHeading,
} from '../../components/atoms/Heading/Heading';

const AwardsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledHeader>
        <StyledHeading>Lista nagród</StyledHeading>
      </StyledHeader>
      <MainBox>
        <StyledContainer>
          {children}
        </StyledContainer>
      </MainBox>
    </>
  );
};

export default AwardsContainer;
