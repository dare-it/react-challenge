import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Button({ children, ...props }) {
  return <MuiButton {...props}>{children}</MuiButton>;
}
