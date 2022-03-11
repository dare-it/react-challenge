import { ActionHeader } from '../../atoms/ActionHeader';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import { CardActions, CardContent } from '@mui/material';
import { Modal as MuiModal } from '@mui/material';
import Box from '@mui/material/Box';


export const Modal = ({ open, title, handleClose, handleSubmit, children }) => {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box>
        <Card
          sx={{ position: 'absolute', top: '50%', left: '50%', minWidth:'450px', transform: 'translate(-50%, -50%)' }}
          title={
            <ActionHeader
              variant={'h4'}
              title={title} />
          }
        >
          <CardContent>{children}</CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='outlined' color='primary' sx={{ m: 2 }} onClick={handleClose}>Anuluj</Button>
            <Button variant='contained' color='primary' onClick={handleSubmit}>Zapisz</Button>
          </CardActions>
        </Card>
      </Box>
    </MuiModal>
  );
};