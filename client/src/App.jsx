import { QueryClientProvider, QueryClient } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './pages/routing';
import { theme } from 'theme';
import { useState } from 'react';
import RootContext from './context/context';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [category, setCategory] = useState();

  return (
    <RootContext.Provider
      value={{
        openModal,
        modalType,
        setOpenModal,
        setModalType,
        category,
        setCategory,
      }}
    >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <CssBaseline />
            <Router />
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </RootContext.Provider>
  );
};

export default App;
