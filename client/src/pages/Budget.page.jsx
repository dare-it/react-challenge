import React, { useState } from 'react';
import { ActionHeader, Button, Card, Page } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';
import { BudgetTableWidget } from 'ui/organisms/BudgetTable.widget';
import { AddNewBudgetRecordModal } from 'ui/organisms/AddNewBudgetRecord.modal';

export const BudgetPage = () => {
  const [modalVisible, toggleModal] = useState(false);
  const openModal = () => {
    toggleModal(true);
  }
  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button variant={'contained'} onClick={openModal} startIcon={<AddOutlinedIcon />}>
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

      <AddNewBudgetRecordModal
        open={modalVisible}
        onClose={() => toggleModal(false)}
      >
      </AddNewBudgetRecordModal>

    </Page>
  );
};
