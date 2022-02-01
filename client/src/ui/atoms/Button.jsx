import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import * as PropTypes from 'prop-types';

export function Button({ children, color, variant, disabled, onClick }) {
  return (
    <MuiButton
      color={color}
      variant={variant}
      disabled={false}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
