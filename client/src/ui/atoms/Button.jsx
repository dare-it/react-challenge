import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme.js';

export function Button({ children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton sx={props.buttonVariant} {...props}>
        {children}
      </MuiButton>
    </ThemeProvider>
  );
}
