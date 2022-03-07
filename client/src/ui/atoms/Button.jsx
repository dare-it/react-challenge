import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

//Added onClick function
export function Button({ children, ...props }) {

  const content = "randomText"

  return <MuiButton
    // Adding icons in the button content
    // startIcon={ }
    // endIcon={ }
    onClick={() => { console.log("click") }}
    {...props}>
    {children},
    {content}
  </MuiButton>;
}
