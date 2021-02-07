import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.md : theme.fontSize.sm};
  margin: 0 0 10px;
`;

export default Paragraph;
