import styled from 'styled-components';
import { ThemeTypes } from '../../../theme/appTheme';

interface StyledInputInterface {
  theme: ThemeTypes;
}

interface StyledRowInterface {
  theme: ThemeTypes;
}
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.5rem auto;
  margin: 2rem auto;
`;

export const StyledLabel = styled.label`
  font-size: 1.15rem;
  padding: 1rem 0;
`;

export const StyledInput = styled.input<StyledInputInterface>`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  @media only screen and (max-width: ${({ theme }: StyledInputInterface) =>
      theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }: StyledInputInterface) => theme.fontSize.xxs};
  }
`;

export const StyledRow = styled.div<StyledRowInterface>`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }: StyledRowInterface) =>
      theme.mediaMaxSize.xs}) {
    flex-direction: column;
  }
`;
