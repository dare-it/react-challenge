import React from 'react';

import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import BudgetTable from 'ui/organisms/BudgetTable';

export const BudgetPage = () => {
  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => null}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <BudgetTable />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
