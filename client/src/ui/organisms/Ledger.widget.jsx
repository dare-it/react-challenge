import React, { useState } from 'react';

import { ActionHeader, Card, Button } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Grid } from '@mui/material';
import { LedgerTableWidget } from 'ui/organisms/LedgerTable.widget';
import { AddNewLedgerRecord } from './AddNewLedgerRecord.modal';

export const LedgerWidget = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');

  const handleOpen = (e) => {
    e.preventDefault();
    setType(e.target.name);
    setOpen(true);
  };

  return (
    <>
      <AddNewLedgerRecord open={open} setOpen={setOpen} type={type} />
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Portfel"
            renderActions={() => (
              <div>
                <Button variant='outlined' startIcon={<AddOutlinedIcon />} name='INCOME' onClick={handleOpen}>
                  Wpłać
                </Button>
                <Button variant='outlined' startIcon={<RemoveOutlinedIcon />} name='EXPENSE' onClick={handleOpen}>
                  Wypłać
                </Button>
              </div>
            )}
          />
        }
      >
        <Grid container>
            <Grid item xs={12}>
              <LedgerTableWidget />
            </Grid>
          </Grid>

      </Card>
    </>
  );
};
