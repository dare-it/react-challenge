import * as React from 'react';
import { Button as MuiButton, Typography } from '@mui/material';
import { styled } from '@mui/material';

import { theme as t } from 'theme';

const MyButton = styled(MuiButton)(({ color, variant }) => ({
  '&, &.MuiButton-contained:active': {
    backgroundColor: variant === 'contained' ? t.palette[color]['light'] : t.palette[color]['contrastText'],
    borderColor: variant === 'contained' ? t.palette[color]['light'] : t.palette[color]['main'],
    color: variant === 'contained' ? t.palette[color]['main'] : t.palette[color]['main'],
  },
  '&:hover, &:active': {
    backgroundColor: variant === 'contained' ? t.palette[color]['main'] : t.palette[color]['light'],
    color: variant === 'contained' ? t.palette[color]['contrastText'] : t.palette[color]['main'],
  },
  '&:disabled, &.MuiButton-contained:disabled, &.MuiButton-outlined:disabled': {
    backgroundColor: (variant === 'contained' || color === 'primary') ? t.palette.greys['100'] : t.palette[color]['contrastText'],
    color: t.palette.greys['300'],
    borderColor: (variant === 'contained' || color === 'primary') ? t.palette[color]['contrastText'] : t.palette.greys['100'],
  },
  '&.MuiButton-containedWarning, &.MuiButton-containedWarning:active': {
    color: t.palette.warning.dark,
  },
  '&.MuiButton-containedPrimary': {
    backgroundColor: t.palette.primary.main,
    color: t.palette.primary.contrastText,
    '&:hover, &:active': {
      backgroundColor: t.palette.primary.dark,
      color: t.palette.secondary.light,
    }
  },
  '&.MuiButton-outlinedPrimary': {
    backgroundColor: t.palette.secondary.light,
    color: t.palette.primary.main,
    borderColor: t.palette.secondary.light,
    '&:hover, &:active': {
      backgroundColor: t.palette.secondary.dark,
      color: t.palette.primary.dark
    }
  },
}));

export function Button({ label, ...props }) {
  return (
    <Typography variant="button" >
      <MyButton {...props}>
        {label}
      </MyButton>
    </Typography>
  );
}
