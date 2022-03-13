import React, {useState} from 'react';
import { ActionHeader, Card, Button, Table, CategoryCell, LocalizedDate, Money, Loader, Error, NoContent} from 'ui';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { LEDGER_QUERY } from 'queryKeys';
import { LedgerService } from 'api';
import {theme} from '../../theme.js';
import { AddNewLedgerRecord } from './AddNewLedgerRecord.modal.jsx';


export const LedgerWidget = () => {
  const queryClient = useQueryClient();
  const {isLoading, error, data} = useQuery(LEDGER_QUERY, () => 
    LedgerService.findAll(),
    
  );

  const mutation = useMutation((ids) => LedgerService.remove({ids}), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY])
    },
  });

  const deleteRecords = (ids) => mutation.mutate(ids);
  
  const tableDefinition = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => 
        <CategoryCell name={row.title}/>
    },

    {
      id: 'category',
      label: 'Kategoria',
      renderCell: (row) => 
        <CategoryCell color={row.category?.color} name={row.category?.name}/>
    },
    
    {
      id: 'createdAt',
      label: 'Data',
      renderCell: (row) => 
        <LocalizedDate date={row.createdAt}/>
      },

    {
      id: 'amount',
      label: 'Kwota',
      renderCell: (row) => {
        if (row.mode === "INCOME") return <div style={{color: theme.palette.success.dark}}> +<Money inCents={row.amountInCents}/></div>;
        if (row.mode === "EXPENSE") return <div style={{color: theme.palette.error.main}}> -<Money inCents={row.amountInCents}/></div>;
      }
        
    },
  ];


const [openExpense, setOpenE] = useState(false);
const handleOpenE = () => {
  setOpenE(true);
};

const [openIncome, setOpenI] = useState(false);
const handleOpenI = () => {
  setOpenI(true);
};

const handleCloseI = () => {
  setOpenI(false);
};

const handleCloseE = () => {
  setOpenE(false);
};


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
    
  
    <Card sx= {{minHight: '80vh', hight: '100%'}}
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => 
            <div>
            <Button onClick= {handleOpenI} variant='outlined' color='primary' startIcon={<AddIcon/>}>Wpłać</Button>
            { openIncome ? <AddNewLedgerRecord open = {openIncome} onClose ={handleCloseI} type = 'INCOME'/> : null }
            <Button onClick= {handleOpenE} variant='outlined' color='primary' startIcon={<RemoveIcon/>}>Wypłać</Button>
            { openExpense ? <AddNewLedgerRecord open = {openExpense} onClose ={handleCloseE} type = 'EXPENSE'/> : null }
            </div>          
          }  
        />
        
      }
    >  
       <Table
        rows={data}
        headCells={tableDefinition}
        getUniqueId={(row) => row.id}
        deleteRecords={deleteRecords}
        />
    </Card>
  

   
  );
};
