import React from 'react';

import { ActionHeader, Button, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import BudgetTable from 'ui/organisms/BudgetTable';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const BudgetPage = () => {
  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (<Button variant={'contained'} startIcon={<AddOutlinedIcon />}>
              Zdefiniuj budżet
            </Button>)}
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
