import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button({ children, ...props }) {
  return (
      <MuiButton {...props} onClick={props.click}>{children}</MuiButton>
  )
}



