import { React, useState } from 'react';
import { ActionHeader, Button, Card, Page } from 'ui';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid } from '@mui/material';
import { BudgetTableWidget } from 'ui/organisms/BudgetTable.widget';
import { AddNewBudgetRecordModal } from 'ui/organisms/AddNewBudgetRecord.modal';
import { Modal } from '@mui/material';

export const BudgetPage = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => console.log("submit")

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button
                variant={'contained'}
                startIcon={<AddOutlinedIcon />}
                onClick={() => null}>
                Zdefiniuj budżet
              </Button>
            )}
          />
        }
      >
        <Modal
          open={open}
        >
          <AddNewBudgetRecordModal open={open} handleOpen={handleOpen} handleClose={handleClose} handleSubmit={handleSubmit} />
        </Modal>

        <Grid container>
          <Grid item xs={12}>
            <BudgetTableWidget />
          </Grid>
        </Grid>
      </Card>

    </Page>
  );
};
