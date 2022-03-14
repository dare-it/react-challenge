import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './pages/routing';
import { theme } from 'theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import RootContext from './context/context';

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
          <CssBaseline />
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </RootContext.Provider>
  );
};

export default App;
