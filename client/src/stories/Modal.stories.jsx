import React from 'react';

import { Modal, Button } from '../ui';
import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'Zadanie 3/Modal',
  component: Modal,
};

export const ModalTest = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant={'contained'}
        color={'primary'}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Zdefiniuj budżet
      </Button>
      <Modal
        title="Zdefiniuj budżet"
        open={open}
        onClose={() => setOpen(false)}
      ></Modal>
    </>
  );
};
