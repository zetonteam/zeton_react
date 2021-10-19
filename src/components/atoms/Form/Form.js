import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.5rem auto;
  margin: 2rem auto;
`;

export const StyledLabel = styled.label`
  font-size: 1.15rem;
  padding: 1rem 0 0.25rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    flex-direction: column;
  }
`;
