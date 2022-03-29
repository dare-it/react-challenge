import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Grid } from '@mui/material';
import { useBudgetModal } from 'hooks';
import {
  ActionHeader,
  AddNewBudgetRecordModal,
  BudgetTableWidget,
  Button,
  Card,
  Page,
} from 'ui';

const DefineBudgetButton = ({ handleClick }) => (
  <Button
    startIcon={<AddRoundedIcon />}
    text={'Zdefiniuj budżet'}
    onClick={() => handleClick()}
  />
);

export const BudgetPage = () => {
  const { open, handleClickOpen, handleClose } = useBudgetModal();

  return (
    <>
      <Page title="Budżet">
        <Card
          title={
            <ActionHeader
              variant="h1"
              title="Budżet"
              renderActions={() => (
                <DefineBudgetButton handleClick={handleClickOpen} />
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
      </Page>
      <AddNewBudgetRecordModal open={open} onClose={handleClose} />
    </>
  );
};
