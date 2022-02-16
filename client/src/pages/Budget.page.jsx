import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import { Button } from '../ui/atoms/Button';
import { Table } from '../ui/molecules/table/Table';
import { QueryClient, QueryClientProvider, useQuery, useMutation } from 'react-query';
import { BudgetService } from '../api';
import { Error } from '../ui/atoms/Error';
import { Loader } from '../ui/atoms/Loader';
import { NoContent } from '../ui/atoms/NoContent';
import { Money } from '../ui/atoms/Money';
import { LocalizedDate } from '../ui/atoms/LocalizedDate';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';


const queryClient = new QueryClient();

export const BudgetPage = () => {
  return (
    <Page title='Budżet'>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title='Budżet'
            renderActions={() => <Button variant='contained' color='primary' startIcon>Zdefiniuj budżet </Button>}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <QueryClientProvider client={queryClient}>
              <BudgetTable />
            </QueryClientProvider></Grid>
        </Grid>
      </Card>
    </Page>
  );
};
const columns = [
  {
    id: 'name',
    label: 'Nazwa',
    renderCell: (row) => <Box sx={{display: 'flex', alignItems:'center'}}><FiberManualRecordIcon fontSize='small' sx={{color:'#37C4D7', marginRight: '10px'}} />{row.category.name}</Box>,
  },
  {
    id: 'amountInCents',
    label: 'Planowane wydatki',
    renderCell: (row) => <Money inCents={row.amountInCents} />,
  },
  {
    id: 'currentSpending',
    label: 'Obecna kwota',
    renderCell: (row) => <Money inCents={row.currentSpending} />,
  },
  {
    id: 'currentSpendingPercent',
    label: 'Status',
    renderCell: (row) => row.currentSpendingPercent > 100 ? 'Przekroczone' : row.currentSpendingPercent === 100 ? 'Wykorzystany' : 'W normie',
  },
  {
    id: 'createdAt',
    label: 'Data utworzenia',
    renderCell: (row) => <LocalizedDate date={row.createdAt} />,
  },
];

const BudgetTable = () => {

  const { isLoading, error, data } = useQuery('budgetData', () =>
    BudgetService.findAll(),
  );

const mutation = useMutation((ids)=>BudgetService.remove({ids}),{onSuccess: ()=>queryClient.invalidateQueries('budgetData')})

  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (data.length === 0) return <NoContent />;
  return (
    <Table rows={data} headCells={columns} getUniqueId={(row) => row.id}
           deleteRecords={(selected)=>mutation.mutate(selected)} />
  );
};

