import CssBaseline from '@mui/material/CssBaseline';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import React, { useContext, useMemo } from 'react';

import palette from './palette';
import typography from './typography';

interface Props {
  children: React.ReactNode;
}

const ThemeConfig = ({
  children
}: Props) => {
  const themeOptions = useMemo(
    () => ({
      typography,
      palette,
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
