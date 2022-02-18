import React from 'react';

import { ActionHeader, Card, Page, Button } from 'ui';
import { BudgetContent } from 'ui/organisms/BudgetContent';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export const BudgetPage = () => {

  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => 
            <Button variant={'contained'} color={'primary'} startIcon={<AddIcon />}>
              Zdefiniuj budżet
            </Button>
            }
          />
        }
        style= {{minHeight: '687px', display: 'flex', flexDirection: 'column'}}
      >
        <Grid container      
        style= {{
              display: 'flex',
              flex: '1',
            }}>
          <Grid 
            item 
            xs={12}>
            <BudgetContent />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
