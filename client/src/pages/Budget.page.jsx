import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

import { Page } from 'ui';

import AddIcon from '@mui/icons-material/Add';
import CardActions from '@mui/material/CardActions';

import { DataToTableLoader } from '../ui/organisms/DataToTableLoader.jsx';
import { Card } from '../ui/atoms/Card.jsx';
import { ActionHeader } from '../ui/atoms/ActionHeader.jsx';
import { Button } from '../ui/atoms/Button.jsx';





export const BudgetPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Page title="Budżet">
      
      <Card
        
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
              renderActions={() => <Button  variant={'contained'} startIcon = {<AddIcon />}>Zdefiniuj budzet!</Button>}
          />
        }
      >
       
        <CardActions>
        
          
        <DataToTableLoader />
          </CardActions>
         
        

       
        
        
        
      </Card>
    </Page>
    </QueryClientProvider>
  );
};
