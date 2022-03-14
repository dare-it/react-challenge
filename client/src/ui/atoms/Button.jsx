import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button({ children, endIcon, ...props }) {
  return (
    <MuiButton {...props} disableRipple onClick={props.onClick}>
      <span
        style={{
          paddingRight: `${
            children.length === 0 ? '0px' : endIcon ? '8px' : '0px'
          }`,
        }}
      >
        {children}
      </span>
    </MuiButton>
  );
}
