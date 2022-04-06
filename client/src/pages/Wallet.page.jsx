import React from 'react';
import { Grid } from '@mui/material';
import { BudgetChartWidget, LedgerWidget, Page, SummaryChartWidget } from 'ui';
// import SnackbarsProvider from '@mui/lab/SnackbarsProvider';

export const WalletPage = () => (
  <>
  {/* <SnackbarsProvider limit={3} autoHideDuration={6000}> */}
    <Page title={'Portfel'}>
      <Grid container spacing={{ xs: 3, md: 6 }}>
        <Grid item xs={12} md={8}>
          <LedgerWidget />
        </Grid>
        <Grid container item xs={12} md={4} spacing={3}>
          <Grid item xs={12}>
            <SummaryChartWidget />
          </Grid>
          <Grid item xs={12}>
            <BudgetChartWidget />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  {/* </SnackbarsProvider> */}
  </>
);
