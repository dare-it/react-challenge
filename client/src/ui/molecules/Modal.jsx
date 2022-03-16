import React from 'react';
import {
  Dialog as MuiModal,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ActionHeader, Button } from 'ui';

const Modal = ({
  open,
  disableSaveButton,
  handleClose,
  handleAccept,
  children,
  header,
}) => {
  return (
    <MuiModal open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <ActionHeader variant="h4" title={header} />
      </DialogTitle>
      <DialogContent sx={{ height: '300px' }}>{children}</DialogContent>
    </MuiModal>
  );
};

export default Modal;
