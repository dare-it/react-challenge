import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import './style.css';

const consoleText = (e) => {
  e.preventDefault();
  console.log('You clicked the button');
};



export function Button({ children, ...props }) {
  
  return (
    <MuiButton onClick={consoleText} {...props}>
      {children}
    </MuiButton>
  );
}
