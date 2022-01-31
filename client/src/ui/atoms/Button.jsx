import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

//Added onClick function
export function Button({ children, ...props }) {
  //Content of the button to be modified
  const content = props;

  return <MuiButton onClick={() => { console.log("click") }} {...props}>{children}, {content}</MuiButton>;
}
