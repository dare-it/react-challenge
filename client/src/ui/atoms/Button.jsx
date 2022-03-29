import { Button as MuiButton } from '@mui/material';
import * as PropTypes from 'prop-types';

export const Button = ({
  text,
  variant,
  color,
  disabled,
  onClick,
  endIcon,
  startIcon,
}) => {
  const isOnlyIconButton = text ? !text.trim() : true;
  const iconButtonStyles = {
    ...(isOnlyIconButton && {
      '&.MuiButton-sizeLarge': {
        width: (theme) => theme.sizing.button.large.onlyIcon.width,
        height: (theme) => theme.sizing.button.large.onlyIcon.height,
        padding: '0',
        '& .MuiButton-endIcon, &.MuiButton-startIcon': {
          margin: 0,
          padding: 0,
        },
      },
    }),
  };
  const action = disabled ? null : onClick;

  return (
    <MuiButton
      sx={iconButtonStyles}
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={action}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {text}
    </MuiButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  color: PropTypes.oneOf(['primary', 'error', 'success', 'warning']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  endIcon: PropTypes.node,
  startIcon: PropTypes.node,
};

Button.defaultProps = {
  text: null,
  variant: 'contained',
  color: 'primary',
  disabled: false,
};
