import React from 'react';
import { Grid } from '@mui/material';
import { LedgerWidget, Page } from 'ui';
import { LedgerChartWidget } from 'ui/organisms/LedgerChart.widget';
import { BudgetChartWidget } from 'ui/organisms/BudgetChart.widget';

export const WalletPage = () => (
  <Page title={'Portfel'}>
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid item xs={12} md={8}>
        <LedgerWidget />
      </Grid>
      <Grid container item xs={12} md={4} spacing={3}>
        <Grid item xs={12}>
          <LedgerChartWidget />
        </Grid>
        <Grid item xs={12}>
          <BudgetChartWidget />
        </Grid>
      </Grid>
    </Grid>
  </Page>
);
