import React from 'react';

import { ActionHeader, Card, ContentManagement, Money, LocalizedDate,  CategoryCell, Button, AddNewLedgerRecord  } from 'ui';
import { Grid } from '@mui/material';
import { LedgerService } from 'api';
import { theme } from 'theme'
import { Box } from '@mui/material';
import { BUDGET_QUERY, LEDGER_QUERY, SUMMARY_QUERY } from 'queryKeys';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { INCOME, EXPENSE } from 'ledgerKeys'
import { useModal } from 'hooks/useModal';

const headers = [
  { id: 'name', label: 'Nazwa',  renderCell: ({title}) => title},
  { id: 'category', label: 'Kategoria', renderCell: ({category}) => <CategoryCell color={category.color} name= {category.name} />},
  { id: 'date',label: 'Data',renderCell: ({createdAt}) => <LocalizedDate date={createdAt}/>},
  { id: 'amount', label: 'Kwota', renderCell: ({mode, amountInCents}) => {
    const income = mode === INCOME

    return (
      <Box sx= {{color: income ? theme.palette.success.dark : theme.palette.error.main}}>
        <Money inCents={income ? `+${amountInCents}` : `-${amountInCents}`} />
      </Box>
    )
  }
  }
];

export const LedgerWidget = () => {
  const [open, handleOpen, handleClose] = useModal();
  const [mode, setMode] = React.useState(null)

  const openModal = (mode) => {
    setMode(mode)
    handleOpen()
  }

  const closeModal = () => {
    setMode(null)
    handleClose()
  }

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => 
          <Box>
            <Button variant={'outlined'} color={'primary'} startIcon={<AddIcon />} style={{marginRight: '16px'}} onClick={() => openModal(INCOME)}>
              Wpłać
            </Button>
            <Button variant={'outlined'} color={'primary'} startIcon={<RemoveIcon />} onClick={() => openModal(EXPENSE)}>
              Wypłać
            </Button>
          </Box>}
        />
      }
      style= {{minHeight: '792px', display: 'flex', flexDirection: 'column'}}
    >
         <Grid container      
        style= {{
              display: 'flex',
              flex: '1',
            }}>
          <Grid 
            item 
            xs={12}>
            <ContentManagement headers={headers} queryName={[LEDGER_QUERY, SUMMARY_QUERY, BUDGET_QUERY]} getDataEndpoint={LedgerService.findAll} removeDataEndpoint={LedgerService.remove} />
          </Grid>
        </Grid>
        <AddNewLedgerRecord open={open} onClose={closeModal} mode={mode}/>
      </Card>
  );
};
