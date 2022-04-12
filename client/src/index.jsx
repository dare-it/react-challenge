import './index.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Slide } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration="5000"
      TransitionComponent={Slide}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  // eslint-disable-next-line unicorn/prefer-query-selector
  document.getElementById('root'),
);
