import { React, useState, } from 'react';
import { ActionHeader, Card, Button } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Box } from '@mui/material';
import { LedgerTableWidget } from './LedgerTable.widget';
import { AddNewLedgerRecordModal } from './AddNewLedgerRecord.modal';
import { Modal } from '@mui/material';

export const LedgerWidget = () => {
  const [open, setOpen] = useState(false);
  const [modalButtonType, setModalButtonType] = useState("");

  const handleOpen = (modalType) => {
    setModalButtonType(modalType);
    setOpen(true);
  };

  const handleClose = () => { setOpen(false) };
  const handleSubmit = () => console.log("submit")

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => <>
            <Box sx={{
              display: 'flex',
              width: 'auto',
              justifyContent: 'space-between',
            }}>
              <Button
                variant={'outlined'}
                startIcon={<AddOutlinedIcon />}
                onClick={() => handleOpen("INCOME")}
                sx={{
                  m: 1
                }}  >
                Wpłać
              </Button>

              <Button
                variant={'outlined'}
                startIcon={<RemoveIcon />}
                onClick={() => handleOpen("EXPENSE")}
                sx={{
                  m: 1
                }}>
                Wypłać
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <AddNewLedgerRecordModal
                  type={modalButtonType}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  handleSubmit={handleSubmit} />
              </Modal>
            </Box>
          </>}
        />
      }
    >
      <Grid container>
        <Grid item xs={12}>
          <LedgerTableWidget />
        </Grid>
      </Grid>
    </Card >
  );
};
