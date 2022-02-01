import React from 'react';

import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';

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
            <Button
              color="primary"
              variant="outlined"
              disabled={true}
              onClick={() => console.log('click')}
            >
              Click me
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={true}
              onClick={() => console.log('click')}
            >
              Click me
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
