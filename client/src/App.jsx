import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Router from './pages/routing';
import { theme } from 'theme';
import { Button } from './ui/atoms/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
