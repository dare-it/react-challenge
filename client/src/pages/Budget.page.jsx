import React from 'react';
import { ActionHeader, Button, Card, Page } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';
import { BudgetTableWidget } from 'ui/organisms/BudgetTable.widget';
import { AddNewBudgetRecord } from 'ui/organisms/AddNewBudgetRecord.modal';

export const BudgetPage = () => {

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button onClick={handleModalOpen} variant={'contained'} startIcon={<AddOutlinedIcon />}>
                Zdefiniuj budżet
              </Button>
            )}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <BudgetTableWidget />
          </Grid>
        </Grid>
      </Card>
      <AddNewBudgetRecord onClose={handleModalClose} open={modalOpen} children=""  />
    </Page>
  );
};
