import * as React from 'react';

export const useBudgetModal = (initialMode = false) => {
  const [open, setOpen] = React.useState(initialMode);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, handleClickOpen, handleClose };
};
