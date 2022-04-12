import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { LEDGER_QUERY, SUMMARY_QUERY, BUDGET_QUERY } from 'queryKeys';
import { useShowSnackbar } from '../../hooks/useShowSnackbar';
import { LedgerService } from 'api';
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
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('INCOME');

  const queryClient = useQueryClient();
  const showSnackbar = useShowSnackbar();

  const { isLoading, isError, data } = useQuery(
    LEDGER_QUERY,
    LedgerService.findAll,
  );

  const { mutate } = useMutation(LedgerService.remove, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(LEDGER_QUERY);
      await queryClient.invalidateQueries(SUMMARY_QUERY);
      await queryClient.invalidateQueries(BUDGET_QUERY);
      showSnackbar('Element został usunięty', 'success');
    },
    onError: () => {
      showSnackbar('Wystąpił nieoczekiwany błąd', 'error');
    },
  });

  const deleteRecords = (ids) => mutate({ ids });

  const showModal = (newType) => {
    setType(newType);
    setOpen(true);
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
        close={() => setOpen(false)}
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
        {isLoading && <Loader />}
        {isError && <Error />}
        {!isLoading && !isError && !data.length && <NoContent />}
        {!isLoading && !isError && !!data.length && (
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
