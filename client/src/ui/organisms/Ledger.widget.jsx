import { Box, Grid } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ActionHeader, Button, Card } from 'ui';
import LedgerTable from './LedgerTable';

export const LedgerWidget = () => {
  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => (
            <Box>
              <Button text="Wpłać" variant="outlined" startIcon={<AddIcon />} />
              <Button
                text="Wypłać"
                variant="outlined"
                sx={{ marginLeft: '15px' }}
                startIcon={<RemoveIcon />}
              />
            </Box>
          )}
        >
          <Grid container>
            <Grid item xs={12}>
              <LedgerTable />
            </Grid>
          </Grid>
        </ActionHeader>
      }
    />
  );
};
