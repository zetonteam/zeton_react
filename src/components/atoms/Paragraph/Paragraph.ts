import styled from 'styled-components';
import type { ThemeTypes } from '../../../theme/appTheme';

interface ParagraphInterface {
  theme: ThemeTypes;
  $big?: boolean;
}

const Paragraph = styled.p<ParagraphInterface>`
  font-size: ${({ theme, $big }) =>
    $big ? theme.fontSize.md : theme.fontSize.sm};
  margin: 0 0 10px;

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme, $big }) =>
      $big ? theme.fontSize.sm : theme.fontSize.xs};
  }
`;

export default Paragraph;
