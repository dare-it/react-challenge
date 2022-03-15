import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Grid } from '@mui/material';
import { ActionHeader, BudgetTableWidget, Button, Card, Page } from 'ui';

const DefineBudgetButton = (
  <Button startIcon={<AddRoundedIcon />} text={'Zdefiniuj budżet'} />
);

export const BudgetPage = () => (
  <Page title="Budżet">
    <Card
      title={
        <ActionHeader
          variant="h1"
          title="Budżet"
          renderActions={() => DefineBudgetButton}
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
);
