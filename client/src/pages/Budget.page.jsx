import React from 'react';

import { ActionHeader, Button, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
export const BudgetPage = () => {
  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => <Button variant="contained" color="primary" label="Zdefiniuj budżet" startIcon={<AddRoundedIcon/>}/>}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
