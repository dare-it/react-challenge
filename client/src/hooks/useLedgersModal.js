import * as React from 'react';

export const useLedgersModal = (
  initialMode = false,
  initialModalType = null,
) => {
  const [open, setOpen] = React.useState(initialMode);
  const [modalType, setModalType] = React.useState(initialModalType);

  const handleClickOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModalType(null);
  };

  return { modalType, open, handleClickOpen, handleClose };
};
