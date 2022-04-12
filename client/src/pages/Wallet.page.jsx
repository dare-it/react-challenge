import { Grid } from '@mui/material';
import { BudgetChart, LedgerWidget, Page, SummaryChart } from 'ui';

export const WalletPage = () => (
  <Page title="Portfel">
    <Grid container spacing={{ xs: 3, md: 6 }}>
      <Grid item xs={12} lg={8}>
        <LedgerWidget />
      </Grid>
      <Grid container item xs={12} lg={4} spacing={3}>
        <Grid item xs={12} md={6} lg={12} data-test-id={'wallet-top-sidebar'}>
          <SummaryChart />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={12}
          data-test-id={'wallet-bottom-sidebar'}
        >
          <BudgetChart />
        </Grid>
      </Grid>
    </Grid>
  </Page>
);
