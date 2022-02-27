import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './pages/routing';
import { theme } from 'theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import RootContext from './context/context'

const queryClient = new QueryClient();

const App = () => {
  const [openLedgerModal, setOpenLedgerModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [openBudgetModal, setOpenBudgetModal] =useState(false)
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <RootContext.Provider value={{openLedgerModal, modalType, setOpenLedgerModal, setModalType, openBudgetModal, setOpenBudgetModal}}>
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
