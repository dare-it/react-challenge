import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import Slide from '@mui/material/Slide';

export const useShowSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = useCallback(
    (message, variant) => {
      enqueueSnackbar(message, {
        variant: variant,
        autoHideDuration: 5000,
        TransitionComponent: Slide,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        sx: {
          '& .SnackbarContent-root': {
            backgroundColor: (theme) =>
              (variant === 'success' && theme.palette.success.main) ||
              (variant === 'error' && theme.palette.error.main),
          },
        },
      });
    },
    [enqueueSnackbar],
  );

  return showSnackbar;
};
