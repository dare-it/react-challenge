import React from 'react';
import { ActionHeader, Card,  Page } from 'ui';
import { Box, Grid } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button} from "../atoms/Button";
import {Table} from "../../ui/molecules/table/Table"
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { LEDGER_QUERY } from 'queryKeys';
import { LedgerService } from '../../api/services/LedgerService';
import { Loader } from 'ui/atoms/Loader';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { ColorBox } from "../../ui/atoms/ColorBox";
import { LocalizedDate } from "../../ui/atoms/LocalizedDate";
import { Money } from "../../ui/atoms/Money";
import { Modal } from "../molecules/Modal"


const headCell = [
  {
    id: '1',
    label: 'Nazwa',
    renderCell: (row) => <p>{row.title}</p>
  },
  {
    id: '2',
    label: 'Kategoria',
    renderCell: (row) => <Box sx={{display:'flex',  alignItems: 'center'}} >
                          <ColorBox  color={row.category?.color}></ColorBox>
                          <p>{row.category?.name}</p></Box>
  },
  {
    id: '3',
    label: 'Data',
    renderCell: (row) => <LocalizedDate date={ row.createdAt }></LocalizedDate> 
  },
  {
    id: '4',
    label: 'Kwota',
    renderCell: (row) =>{
      if(row.mode==="EXPENSE") return <Box sx={{color:'red'}}>-<Money inCents={ row.amountInCents }></Money></Box>
      if(row.mode==="INCOME") return <Box sx={{color:'#00A980'}}>+<Money inCents={ row.amountInCents }></Money></Box>
    }  
  }
]

export const LedgerWidget = () => {
  const [openAdd, setAddOpen] = React.useState(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  const [openRemove, setRemoveOpen] = React.useState(false);
  const handleRemoveOpen = () => setRemoveOpen(true);
  const handleRemoveClose = () => setRemoveOpen(false);

  const queryClient =useQueryClient();
  const {isLoading, error, data } = useQuery([LEDGER_QUERY], () => LedgerService.findAll())
  const mutation = useMutation((ids) => LedgerService.remove({ids}),
  {
    onSuccess: async () => {
      await queryClient.invalidateQueries([LEDGER_QUERY])
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
    <Page title="Portfel">
      <Modal open={openAdd} title={'Dodaj wpływ'} handleClose={handleAddClose}></Modal>
      <Modal open={openRemove} title={'Dodaj wydatek'} handleClose={handleRemoveClose}></Modal>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Portfel"
            renderActions={() => 
            <Box>
              <Button 
                sx={{
                  marginRight: '15px'
                }}
                variant={'outlined'} 
                color={'primary'} 
                startIcon={ <AddOutlinedIcon /> }
                onClick={handleAddOpen}>
                  Wpłać
              </Button>
              <Button 
                
                variant={'outlined'} 
                color={'primary'} 
                startIcon={ <RemoveIcon />}
                onClick={handleRemoveOpen}>
                  Wypłać
              </Button>
            </Box>}
          />
        }
      > 
      <Grid container>
          <Grid item xs={12}>
            <Table 
              headCells={headCell}           
              rows={data}
              getUniqueId={(row) => row.id} 
              deleteRecords={deleteRecords}
              >
            </Table> 
          </Grid>
        </Grid>  
      </Card>
    </Page>

  );
};