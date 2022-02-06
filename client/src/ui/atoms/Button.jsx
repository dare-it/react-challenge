import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button({ props, children }) {
  return <MuiButton {...props}>{children}</MuiButton>;
}
