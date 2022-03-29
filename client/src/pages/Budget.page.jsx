import React, { useState } from 'react';

import { ActionHeader, Button, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import BudgetTable from 'ui/organisms/BudgetTable';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddNewBudgetRecordModal from 'ui/organisms/modals/AddNewBudgetRecord.modal';

export const BudgetPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Page title="Budżet">
      <AddNewBudgetRecordModal
        open={isModalOpen}
        handleClose={handleModalClose}
      >
        content will be here
      </AddNewBudgetRecordModal>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button
                variant={'contained'}
                startIcon={<AddOutlinedIcon />}
                text="Zdefiniuj budżet"
                onClick={handleModalOpen}
              />
            )}
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
