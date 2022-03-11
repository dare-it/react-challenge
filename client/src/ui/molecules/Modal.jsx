import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from 'ui';
import {
  Modal as MuiModal,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  minHeight: 197,
  bgcolor: '#fff',
  boxShadow: '0px 2px 10px rgba(17, 25, 69, 0.1)',
  borderRadius: '8px',
  py: 4,
  px: 3.2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const buttonsStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0px',
  marginTop: '45px',
};

export const Modal = ({
  children,
  open,
  onClose,
  onSubmit,
  title,
  description,
  ...props
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={modalStyle}>
        <CardHeader
          title={title}
          subheader={description}
          titleTypographyProps={{ variant: 'h4' }}
          sx={{
            '.MuiCardHeader-title': { fontFamily: 'Inter' },
          }}
        />
        <CardContent>{children}</CardContent>
        <CardActions sx={buttonsStyle}>
          <Box>
            <Button variant="outlined" color="primary" onClick={onClose}>
              Anuluj
            </Button>
            <Button
              sx={{ marginLeft: '15px' }}
              variant="contained"
              color="primary"
              disabled={props.disabled}
              onClick={onSubmit}
            >
              Zapisz
            </Button>
          </Box>
        </CardActions>
      </Card>
    </MuiModal>
  );
};
