import React from 'react';
import { ActionHeader, Card, Button } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Box } from '@mui/material';
import { LedgerTableWidget } from './LedgerTable.widget';


export const LedgerWidget = () => {
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
                onClick={() => null}
                sx={{
                  m: 1
                }}  >
                Wpłać
              </Button>
              <Button
                variant={'outlined'}
                startIcon={<RemoveIcon />}
                onClick={() => null}
                sx={{
                  m: 1
                }}>
                Wypłać
              </Button>
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
