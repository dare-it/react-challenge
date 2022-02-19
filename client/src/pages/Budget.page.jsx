import React from 'react';
import { ActionHeader, Card, Page } from 'ui';
import { Box } from '@mui/material';
import {Button} from "../ui/atoms/Button"
import {Table} from "../ui/molecules/table/Table"
import AddIcon from '@mui/icons-material/Add';
import { useQuery,
  useMutation,
  useQueryClient } from 'react-query';
  import { Loader } from "../ui/atoms/Loader";
import { Error } from "../ui/atoms/Error";
import { NoContent } from "../ui/atoms/NoContent";
import { Money } from "../ui/atoms/Money";
import { LocalizedDate } from "../ui/atoms/LocalizedDate";
import { ColorBox } from "../ui/atoms/ColorBox";
import { BudgetService } from "../api/services/BudgetService";

const headCell = [
  {
  id: '1',
  label: '',
  renderCell: (row) => null
},
{
  id: '2',
  label: 'Nazwa',
  renderCell: (row) => <Box sx={{display:'flex',  alignItems: 'center'}} ><ColorBox  color={row.category?.color}></ColorBox><p>{row.category?.name}</p></Box>
},
{
  id: '3',
  label: 'Planowane wydatki',
  renderCell: (row) => <Money inCents={ row.amountInCents}></Money>
},
{
  id: '4',
  label: 'Obecna kwota',
  renderCell: (row) => <Money inCents={ row.currentSpending }></Money>  
},
{
  id: '5',
  label: 'Status',
  renderCell: (row) => {
    if(row.currentSpending === row.amountInCents) return 'Wykorzystany';
    if(row.currentSpending > row.amountInCents) return 'Przekroczone';
    if(row.currentSpending < row.amountInCents) return 'W normie'; 
  }  
},
{
  id: '6',
  label: 'Data utworzenia',
  renderCell: (row) => <LocalizedDate date={ row.createdAt }></LocalizedDate>
},
]

export const BudgetPage = () => {
  const handleOnClick = () => {
    console.log("klick")
  }

const queryClient = useQueryClient();

const { isLoading, error, data} = useQuery('budgetData', () => 
BudgetService.findAll(),
  {
    retry: false,
    retryDelay: 500,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  }
  );

  const mutation = useMutation((ids) => BudgetService.remove({ids}),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('budgetData')
      }
    }
  )

  const deleteRecords = (ids) => mutation.mutate(ids);

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  if(!data?.length) return <NoContent />;


  return (
    
    <Page title="Budżet">
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => <Button onClick={handleOnClick} variant={'contained'} color={'primary'} startIcon={<AddIcon fontSize="small" />}>Zdefiniuj budżet</Button>}
          />
        }
      >
       <Table 
            headCells={headCell}           
            rows={data}
            getUniqueId={(row) => row.id} 
            deleteRecords={deleteRecords}>
          </Table>       
      </Card>
    </Page>
  );
};