import styled from 'styled-components';

const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: space-around;
  margin: 0 5%;
  margin-bottom: 40px;
  max-width: 500px;
  position: relative;

  @media only screen and(max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    margin: 0 auto;
    padding: 1rem 2rem 1rem 1rem;
  }
`;

export default MainBox;
