import React from 'react';
import {
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

const LedgerTable = () => {
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
      renderCell: (row) => <Money inCents={row.amountInCents} />,
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
    <Table
      headCells={tableDefinition}
      rows={data}
      getUniqueId={(row) => row.id}
      deleteRecords={deleteRows}
    />
  );
};

export default LedgerTable;
