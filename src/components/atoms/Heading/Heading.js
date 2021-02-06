import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xl : theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 0;
`;

export default Heading;
