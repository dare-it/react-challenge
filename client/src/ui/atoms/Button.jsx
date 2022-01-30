import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

//Added onClick function
export function Button({ children, ...props }) {
  return <MuiButton onClick={() => { alert("clicked") }} {...props}>{children}</MuiButton>;
}
