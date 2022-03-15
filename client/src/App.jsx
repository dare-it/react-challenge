import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Router from './pages/routing';
import { theme } from 'theme';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

export default App;
