import React from 'react';
import { ActionHeader, Card, Page } from 'ui';
import { Box, Grid } from '@mui/material';
import {Button} from "../ui/atoms/Button"
import {Table} from "../ui/molecules/table/Table"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useQuery,
  useMutation,
  useQueryClient } from 'react-query';
import { Loader } from 'ui/atoms/Loader';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { Money } from "../ui/atoms/Money";
import { LocalizedDate } from "../ui/atoms/LocalizedDate";
import { ColorBox } from "../ui/atoms/ColorBox";
import { BudgetService } from "../api/services/BudgetService";
import { BUDGET_QUERY } from 'queryKeys';
import { Modal } from '../ui/molecules/Modal';

const headCell = [
{
  id: '1',
  label: 'Nazwa',
  renderCell: (row) => <Box sx={{display:'flex',  alignItems: 'center'}}>
      <ColorBox color={row.category?.color}></ColorBox><p>{row.category?.name}</p></Box>
},
{
  id: '2',
  label: 'Planowane wydatki',
  renderCell: (row) => <Money inCents={ row.amountInCents}></Money>
},
{
  id: '3',
  label: 'Obecna kwota',
  renderCell: (row) => <Money inCents={ row.currentSpending }></Money>  
},
{
  id: '4',
  label: 'Status',
  renderCell: (row) => {
    if(row.currentSpending === row.amountInCents) return 'Wykorzystany';
    if(row.currentSpending > row.amountInCents) return 'Przekroczone';
    if(row.currentSpending < row.amountInCents) return 'W normie'; 
  }  
},
{
  id: '5',
  label: 'Data utworzenia',
  renderCell: (row) => <LocalizedDate date={ row.createdAt }></LocalizedDate>
},
]

export const BudgetPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


const queryClient = useQueryClient();

const { isLoading, error, data } = useQuery([BUDGET_QUERY], () => BudgetService.findAll());

  const mutation = useMutation((ids) => BudgetService.remove({ids}),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([BUDGET_QUERY])
      }
    }
  )

  const deleteRecords = (ids) => mutation.mutate(ids);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!data?.length) {
    return <NoContent />;
  }


  return (
    
    <Page title="Budżet">
      <Modal open={open} title={'Zdefiniuj budżet'} handleClose={handleClose}></Modal>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => <Button variant={'contained'} color={'primary'} startIcon={<AddOutlinedIcon />} onClick={handleOpen}>Zdefiniuj budżet</Button>}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <Table 
              headCells={headCell}           
              rows={data}
              getUniqueId={(row) => row.id} 
              deleteRecords={deleteRecords}>
            </Table> 
          </Grid>
        </Grid>      
      </Card>
    </Page>
  );
};