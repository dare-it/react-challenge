import React from 'react';
import { Grid } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ActionHeader, Button, Card, Page } from 'ui';
import { BudgetPageContent } from 'ui/organisms/BudgetPageContent';

const queryClient = new QueryClient();

export const BudgetPage = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Page title="Budżet">
        <Card
          title={
            <ActionHeader
              variant={'h1'}
              title="Budżet"
              renderActions={() => <Button variant="contained" color="primary" label="Zdefiniuj budżet" startIcon={<AddRoundedIcon />} />}
            />
          }
        >
          <Grid container>
            <Grid item xs={12}>
              <BudgetPageContent />
            </Grid>
          </Grid>
        </Card>
      </Page>
    </QueryClientProvider>
  );
};
