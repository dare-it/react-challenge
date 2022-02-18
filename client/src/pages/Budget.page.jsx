import React from 'react';

import { ActionHeader, Card, Page, Error, NoContent, Loader, Button, Table, Money, LocalizedDate, CategoryCell } from 'ui';
import { Grid, Box } from '@mui/material';
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { BudgetService } from 'api';
import { theme } from 'theme'
import AddIcon from '@mui/icons-material/Add';

const headers = [
  { id: 'category', label: 'Nazwa',  renderCell: (params) => <CategoryCell color={theme.palette.background.blue} name= {params.category.name} />},
  { id: 'firstName', label: 'Planowane wydatki', renderCell: (params) => <Money inCents={params.amountInCents} />},
  { id: 'currentSpending', label: 'Obecna kwota', renderCell: (params) => <Money inCents={params.currentSpending} />},
  {
    id: 'age',
    label: 'Status',
    renderCell: (params) => {
      let status = 'W normie'
      if (params.amountInCents < params.currentSpending) status = 'Przekroczone'
      else if (params.amountInCents === params.currentSpending) status = 'Wykorzystany'

      return status
    }
  },
  { id: 'fullName', label: 'Data utworzenia', renderCell: (params) => <LocalizedDate date={params.createdAt}/>},
];

export const BudgetPage = () => {
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery('budget', BudgetService.findAll)

  const removeBudget = (budget) => BudgetService.remove(budget)

  const mutation = useMutation( removeBudget , {
    onSuccess: () => queryClient.invalidateQueries('budget')
  })

  let renderedContent;

  if (isLoading) renderedContent = <Box  sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%'
    }}> 
      <Loader />
    </Box>
  else if (error) renderedContent = <Error />
  else if (data && data.length === 0) renderedContent = <NoContent />
  else renderedContent =  <Table headCells={headers} rows={data} getUniqueId={(element) => element.id} deleteRecords={(id) => mutation.mutate({ids: id})}/>


  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => 
            <Button variant={'contained'} color={'primary'}>
              <AddIcon  sx={{ fontSize: 15,  marginRight: '10px' }} />
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
            {renderedContent}
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
