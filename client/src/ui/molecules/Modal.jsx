import * as React from 'react';
import { Box, Modal as MuiModal, Typography }   from '@mui/material';
import { Button } from "../atoms/Button";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '450px',
  height: '200px',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  padding: '10px 30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  fontWeight:'bold',
  fontSize: '20px'
};

const styleBtns = {
    display:'flex',
    justifyContent: 'end',
  };

export const Modal =({title, handleClose, open}) => {

  return (
    <div>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{fontWeight:'bold', fontSize: '20px'}}
                      id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography> 
          <Box sx={styleBtns}>
            <Button sx={{margin:'0 15px'}} variant={'outlined'} color={'primary'} onClick={handleClose}>
                Anuluj
            </Button>
            <Button variant={'contained'} color={'primary'}>
                Zapisz
            </Button>
          </Box>          
        </Box>
      </MuiModal>
    </div>
  );
}
