import { ActionHeader } from '../../atoms/ActionHeader';
import { Card } from '../../atoms/Card';
import {  CardContent } from '@mui/material';
import { Modal as MuiModal } from '@mui/material';
import Box from '@mui/material/Box';

export const Modal = ({ open, title, handleClose, children }) => {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box>
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '450px',
            transform: 'translate(-50%, -50%)',
          }}
          title={<ActionHeader variant={'h4'} title={title} />}
        >
          <CardContent>{children}</CardContent>
        </Card>
      </Box>
    </MuiModal>
  );
};
