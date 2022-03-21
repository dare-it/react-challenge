import React from 'react';
import { Modal as MuiModal, Card, Typography } from '@mui/material';
import { Button } from 'ui';
import { CardHeader, CardContent, CardActions } from '@mui/material';
import { theme } from '../../theme.js';

const style = {
  position: 'absolute',
  width: 450,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0px 2px 10px rgba(17, 25, 69, 0.1)',
  borderRadius: '8px',
};

export const Modal = ({
  open,
  onClose,
  modalTitle,
  description,
  children,
  onSubmit,
  canSubmit = true,
}) => {
  return (
    <div>
      <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardHeader
            title={
              <Typography id="modal-modal-title" variant="h4">
                {modalTitle}
              </Typography>
            }
            subheader={
              <Typography id="modal-modal-description">
                {description}
              </Typography>
            }
          />
          <CardContent sx={{ mt: 2, mb: 2 }}>{children}</CardContent>
          <CardActions
            sx={{
              marginTop: 4,
              justifyContent: 'flex-end',
            }}
          >
            <Button
              onClick={onClose}
              variant="outlined"
              color="primary"
              sx={{ marginRight: '8px' }}
            >
              Anuluj
            </Button>
            <Button
              onClick={onSubmit}
              disabled={!canSubmit}
              variant="contained"
              color="primary"
            >
              Zapisz
            </Button>
          </CardActions>
        </Card>
      </MuiModal>
    </div>
  );
};
