import React from 'react';
import { Grid } from '@mui/material';
import { LedgerWidget, Page } from 'ui';
import { SpendingChart } from 'ui/organisms/SpendingChart.jsx';
import { BudgetChart } from 'ui/organisms/BudgetChart';

export const WalletPage = () => (
  <Page title={'Portfel'}>
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid item xs={12} md={8}>
        <LedgerWidget />
      </Grid>
      <Grid container item xs={12} md={4} spacing={3}>
        <Grid item xs={12} data-test-id={'wallet-top-sidebar'}>
          <SpendingChart />
        </Grid>
        <Grid item xs={12} data-test-id={'wallet-bottom-sidebar'}>
          <BudgetChart />
        </Grid>
      </Grid>
    </Grid>
  </Page>
);
