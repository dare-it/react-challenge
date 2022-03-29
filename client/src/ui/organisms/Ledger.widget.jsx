import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LedgerService } from 'api';
import { LEDGER_QUERY } from 'queryKeys';

import { buttonStyles } from '../atoms/Button';
import { ActionHeader, Card, Button } from 'ui';
import { AddNewLedgerRecord } from 'ui/organisms/AddNewLedgerRecord.modal';
import { Loader } from 'ui/atoms/Loader';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { Box } from '@mui/material';
import { Table } from 'ui/molecules/table/Table';
import { CategoryCell } from 'ui/molecules/CategoryCell';
import { Money } from 'ui/atoms/Money';
import { LocalizedDate } from 'ui/atoms/LocalizedDate';


const AmountDisplay = (mode) => {
  if (mode.mode === "INCOME") {
    return (
      <Box
        sx={{
          color: 'green'
        }}>
        + <Money inCents={mode.amountInCents} />
      </Box>
    );
  } else if (mode.mode === "EXPENSE") {
    return (
      <Box
        sx={{
          color: 'red'
        }}>
        - <Money inCents={mode.amountInCents} />
      </Box>
    );
  }
  else {
    return(
      <Money inCents={mode.amountInCents} />
    )
  }
}

export const LedgerWidget = () => {
  
  const [incomeModalOpen, setIncomeModalOpen] = React.useState(false);
  const [expenseModalOpen, setExpenseModalOpen] = React.useState(false);

  const handleIncomeModalOpen = () => setIncomeModalOpen(true);
  const handleIncomeModalClose = () => setIncomeModalOpen(false);

  const handleExpenseModalOpen = () => setExpenseModalOpen(true);
  const handleExpenseModalClose = () => setExpenseModalOpen(false);



  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    LEDGER_QUERY, () => LedgerService.findAll()
  );

  const mutation = useMutation((ids) => LedgerService.remove({ ids }), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
    },
  });

  const deleteRecords = (ids) => mutation.mutate(ids);

  console.log(data);
  const tableDefinition = [
    {
      id: 'title',
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell color={row.title.color} name={row.title} />
      ),
    },
    {
      id: 'category',
      label: 'Kategoria',
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 'createdAt',
      label: 'Data',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
   
    {
      id: 'amountInCents',
      label: 'Kwota',
      renderCell: (row) => <AmountDisplay mode = {row.mode} amountInCents = {row.amountInCents}/>,
    },
  ];

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
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() =>
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              columnGap: '15px'
            }}>
              <Button onClick={handleIncomeModalOpen} startIcon={buttonStyles.Icon.addIcon}>Wpłać</Button>
              <Button onClick={handleExpenseModalOpen} startIcon={buttonStyles.Icon.removeIcon}>Wypłać</Button>
            </Box>
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
      <AddNewLedgerRecord type = "INCOME" onClose={handleIncomeModalClose} open={incomeModalOpen} children=""  />
      <AddNewLedgerRecord type = "EXPENSE" onClose={handleExpenseModalClose} open={expenseModalOpen} children=""  />
      
    </Card>
  );
};
