import React from 'react';

import { ActionHeader, Card, Page, Button, Money, LocalizedDate, Error, Loader, CategoryCell } from 'ui';
import { Grid } from '@mui/material';
import {Table} from 'ui';
import {BudgetService} from '../api/services/BudgetService.js'
import { useQuery, useMutation } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query'
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import { NoContent } from 'ui/atoms/NoContent.jsx';

function createHeader( {id, disablePadding, label{){
  return {id, disablePadding, label, renderCell: (params) => (params[id])};
}

const headCells = [
  createHeader({id: 1, disablePadding: false, label: 'Nazwa'}),
  createHeader({id: 2, disablePadding: false, label: 'Planowane wydatki'}),
  createHeader({id: 3, disablePadding: false, label: 'Obecna kwota'}),
  createHeader({id: 4, disablePadding: false, label: 'Status'}),
  createHeader({id: 5, disablePadding: false, label: 'Data utworzenia'}),
]

const queryClient = new QueryClient()

function statusName(row){
  if( row.amountInCents === row.currentSpending){
    return 'Wykorzystany'
  } else if(row.currentSpending > row.amountInCents){
    return 'Przekroczony'
  } else {
    return 'W normie'
  }
}; 

const BudgetTable = () => {
  const getAllBudget = async (key) => {
    const res = await BudgetService.findAll();
    return res;
  };
  
  const { isLoading, isError, data, error } = useQuery('budget', getAllBudget);

  const deleteBudget = async (selected) => {
    //console.log("deleteBudget" + selected);
    return await BudgetService.remove({ids: selected});
  };

  const deleteSelected = useMutation((selected) => deleteBudget(selected),

  {
    onSuccess: () => {
      queryClient.invalidateQueries('budget');
    },
  },
  );

if (isLoading) return <Loader></Loader>;
if (isError) return <Error error={error}></Error>;
if (data.length === 0) { return <NoContent></NoContent>}; 

let rows = [];

data.map((row) => {
 
  rows.push({
    1:  <div >
          <CircleIcon sx={{float:'left', possition: 'static',width:'16px', height:'16px', marginRight:'10px', color:'#37C4D7', order:'0', flex: 'none', flexGrow:'0' }}   />
          <CategoryCell name={row.category.name}></CategoryCell>
        </div>,
    2: <Money inCents={row.amountInCents}></Money>, 
    3: <Money inCents={row.currentSpending}></Money>,
    4: statusName(row),
    5: <LocalizedDate date={row.createdAt}></LocalizedDate>, 
    6: row.id
  })
})

function getUniqueId(row) {
  return row[6];  
};

function deleteRecords(selected) {
  deleteSelected.mutate(selected);
};

return <Table rows = {rows} headCells= {headCells} getUniqueId= {getUniqueId} deleteRecords = {deleteRecords}></Table> ;

};

export const BudgetPage = () => {
  return (
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Twój budżet"
            renderActions={() => <Button variant='contained' color='primary' startIcon={<AddIcon/>}>Zdefiniuj budżet</Button> }
            
          />
        }
        
      >
        
        <QueryClientProvider client={queryClient}><BudgetTable/></QueryClientProvider>
        <Grid container>
          <Grid item xs={12}> </Grid>  
        </Grid>
      </Card>
    </Page>
  );
};
