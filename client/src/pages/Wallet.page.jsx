import React from 'react';
import { Grid } from '@mui/material';
import { LedgerWidget, Page, BalanceChart, BudgetChart } from 'ui';

export const WalletPage = () => (
  <Page title={'Portfel'}>
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid item xs={12} md={8}>
        <LedgerWidget />
      </Grid>
      <Grid container item xs={12} md={4} spacing={3}>
        <Grid item xs={12} data-test-id={'wallet-top-sidebar'}>
          <BalanceChart />
        </Grid>
        <Grid item xs={12} data-test-id={'wallet-bottom-sidebar'}>
          <BudgetChart />
        </Grid>
      </Grid>
    </Grid>
  </Page>
);
