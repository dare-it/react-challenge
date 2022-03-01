import React from 'react';
import {
  Dialog as MuiModal,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ActionHeader, Button } from 'ui';

const Modal = ({ open, handleClose, handleAccept, children, header }) => {
  return (
    <MuiModal open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle><ActionHeader variant="h4" title={header} /></DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="outlined" text="Anuluj" onClick={handleClose} />
        <Button variant="contained" text="Zapisz" onClick={handleAccept} />
      </DialogActions>
    </MuiModal>
  );
};

export default Modal;
