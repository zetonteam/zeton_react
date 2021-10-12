import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { theme } from '../../theme/appTheme';

const MainTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  );
};

export default MainTemplate;
