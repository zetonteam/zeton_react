import React from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../../theme/appTheme';

interface StyledContainerInterface {
  theme: ThemeTypes;
}
export const StyledContainer = styled.div<StyledContainerInterface>`
  position: relative;
  min-height: 100vh;
  width: 100%;
  //max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  padding-left: 120px;
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    padding: 30px;
  }
`;
interface HomeTemplateProps {
  children: React.ReactNode;
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default HomeTemplate;
