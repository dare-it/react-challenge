import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { LEDGER_QUERY } from 'queryKeys';
import { LedgerService } from 'api';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
import {
  ActionHeader,
  Card,
  Button,
  Table,
  CategoryCell,
  Loader,
  Error,
  NoContent,
  LocalizedDate,
  Money,
  AddNewLedgerRecord,
} from 'ui';

export const LedgerWidget = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('INCOME');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const queryClient = useQueryClient();

  const { isLoading, isError, data } = useQuery(
    LEDGER_QUERY,
    LedgerService.findAll,
  );

  const { mutate } = useMutation(LedgerService.remove, {
    onSuccess: () => {
      return queryClient.invalidateQueries(LEDGER_QUERY);
    },
  });

  const deleteRecords = (ids) => mutate({ ids });

  const showModal = (newType) => {
    setType(newType);
    handleOpen();
  };

  const onSubmit = () => {
    setOpen(false);
    alert('zapisano');
  };

  const headCells = [
    {
      id: 0,
      label: 'Nazwa',
      renderCell: (row) => {
        return row.title;
      },
    },
    {
      id: 1,
      label: 'Kategoria',
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 2,
      label: 'Data',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
    {
      id: 3,
      label: 'Kwota',
      renderCell: (row) => {
        if (row.mode === 'INCOME')
          return (
            <Box sx={{ color: '#00A980' }}>
              +<Money inCents={row.amountInCents} />
            </Box>
          );

        if (row.mode === 'EXPENSE')
          return (
            <Box sx={{ color: '#FF5D5D' }}>
              -<Money inCents={row.amountInCents} />
            </Box>
          );
      },
    },
  ];

  return (
    <>
      <AddNewLedgerRecord
        open={open}
        onSubmit={onSubmit}
        onClose={handleClose}
        type={type}
      />
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Portfel"
            renderActions={() => (
              <Box>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => showModal('INCOME')}
                >
                  Wpłać
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<RemoveIcon />}
                  sx={{ marginLeft: '15px' }}
                  onClick={() => showModal('EXPENSE')}
                >
                  Wypłać
                </Button>
              </Box>
            )}
          />
        }
      >
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : !data.length ? (
          <NoContent />
        ) : (
          <Table
            headCells={headCells}
            rows={data}
            getUniqueId={(row) => row.id}
            deleteRecords={deleteRecords}
          />
        )}
      </Card>
    </>
  );
};
