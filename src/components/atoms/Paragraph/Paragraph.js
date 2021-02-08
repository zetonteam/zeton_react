import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.md : theme.fontSize.sm};
  margin: 0 0 10px;

  @media only screen and (max-width: ${({ theme }) =>
  theme.mediaMaxSize.xs}) {
    font-size: ${({ theme, big }) =>
    big ? theme.fontSize.sm : theme.fontSize.xs};
  }
`;

export default Paragraph;
