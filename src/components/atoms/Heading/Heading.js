import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xl : theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.bold};
  margin: 0 0 10px;

  @media only screen and (max-width: ${({ theme }) =>
  theme.mediaMaxSize.xs}) {
    font-size: ${({ theme, big }) =>
    big ? theme.fontSize.md : theme.fontSize.sm};
  }
`;

export default Heading;
