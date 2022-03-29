import * as React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button({
  startIcon,
  endIcon,
  centerIcon,
  text,
  color,
  disabled,
  onClick,
  variant,
  ...props
}) {
  return (
    <MuiButton
      startIcon={!!startIcon && startIcon}
      endIcon={!!endIcon && endIcon}
      color={color}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {text ? text : centerIcon}
    </MuiButton>
  );
}
