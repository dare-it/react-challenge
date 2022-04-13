import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LEDGER_QUERY } from 'queryKeys';
import { LedgerService } from 'api';
import { Loader } from 'ui/atoms/Loader';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { Table } from 'ui/molecules/table/Table';
import React from 'react';
import { CategoryCell } from 'ui/molecules/CategoryCell';
import { Money } from 'ui/atoms/Money';
import { LocalizedDate } from 'ui/atoms/LocalizedDate';

export const LedgerTableWidget = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(LEDGER_QUERY, () =>
    LedgerService.findAll(),
  );

  const mutation = useMutation((ids) => LedgerService.remove({ ids }), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
    },
  });

  const deleteRecords = (ids) => mutation.mutate(ids);

  const tableDefinition = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => (
        row.title
      ),
    },
    {
      id: 'category',
      label: 'Kategoria',
      renderCell: (row) => <CategoryCell color={row.category.color} name={row.category.name}/>,
    },
    {
      id: 'createdAt',
      label: 'Data utworzenia',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
    {
      id: 'amount',
      label: 'Kwota',
      renderCell: (row) => (row.mode === 'INCOME' ?
        <span style={{color: '#008000'}}>
          +
          <Money inCents={row.amountInCents} />
        </span>
        :
        <span style={{color: '#ff0000'}}>
          -
          <Money inCents={row.amountInCents} />
        </span> ),
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
      rows={data}
      headCells={tableDefinition}
      getUniqueId={(row) => row.id}
      deleteRecords={deleteRecords}
    />
  );
};