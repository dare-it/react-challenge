import React from 'react';
import { Grid } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { ActionHeader, Button, Card, Page, BudgetWidget, AddNewBudgetRecord } from 'ui';

export const BudgetPage = () => {

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              label="Zdefiniuj budżet"
              startIcon={<AddRoundedIcon />} />}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <BudgetWidget />
            <AddNewBudgetRecord open={modalOpen} handleClose={handleClose} />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
