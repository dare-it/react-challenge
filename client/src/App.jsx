import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Router from './pages/routing';
import { theme } from 'theme';
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient()

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
  );
};

export default App;
