import { Grid } from '@mui/material';
import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { ActionHeader, Button, Card, Table } from 'ui';

export const LedgerWidget = () => {
  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => (
            <>
              <Button text="Wpłać" startIcon={<AddOutlinedIcon />} />
              <Button text="Wypłać" startIcon={<AddOutlinedIcon />} />
            </>
          )}
        >
          <Grid container>
            <Grid item xs={12}>
              <Table></Table>
            </Grid>
          </Grid>
        </ActionHeader>
      }
    />
  );
};
