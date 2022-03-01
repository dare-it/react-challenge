import { Box, Grid } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  ActionHeader,
  Button,
  Card,
  CategoryCell,
  Error,
  Loader,
  LocalizedDate,
  Money,
  NoContent,
  Table,
} from 'ui';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LEDGER_QUERY } from 'queryKeys';
import { LedgerService } from 'api';
import { theme } from '../../theme';

export const LedgerWidget = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(LEDGER_QUERY, () =>
    LedgerService.findAll(),
  );

  const mutation = useMutation((ids) => LedgerService.remove({ ids }), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
    },
  });

  const deleteRows = (ids) => mutation.mutate(ids);

  const tableDefinition = [
    { id: 'name', label: 'Nazwa', renderCell: (row) => row.title },
    {
      id: 'category',
      label: 'Kategoria',
      renderCell: (row) => (
        <CategoryCell name={row.category?.name} color={row.category?.color} />
      ),
    },
    {
      id: 'date',
      label: 'Data',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
    {
      id: 'amount',
      label: 'Kwota',
      renderCell: (row) =>
        row.mode === 'INCOME' ? (
          <Box sx={{ color: theme.palette.success.dark}}>
            +<Money inCents={row.amountInCents} />
          </Box>
        ) : (
          <Box sx={{ color: theme.palette.error.dark }}>
            -<Money inCents={row.amountInCents} />
          </Box>
        ),
    },
  ];

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => (
            <Box>
              <Button text="Wpłać" variant="outlined" startIcon={<AddIcon />} />
              <Button
                text="Wypłać"
                variant="outlined"
                sx={{ marginLeft: '15px' }}
                startIcon={<RemoveIcon />}
              />
            </Box>
          )}
        />
      }
    >
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : !data.length ? (
        <NoContent />
      ) : (
        <Table
          headCells={tableDefinition}
          rows={data}
          getUniqueId={(row) => row.id}
          deleteRecords={deleteRows}
        />
      )}
    </Card>
  );
};
