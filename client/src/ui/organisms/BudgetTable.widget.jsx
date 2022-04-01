import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { BudgetService } from 'api';
import { BUDGET_QUERY, PARTIAL_CATEGORIES_QUERY } from 'queryKeys';
import {
  Loader,
  Error,
  NoContent,
  Table,
  CategoryCell,
  Money,
  LocalizedDate,
} from 'ui';
import { useMutationWithFeedback } from 'hooks';

export const BudgetTableWidget = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(BUDGET_QUERY, () =>
    BudgetService.findAll(),
  );

  const { mutate: deleteRecordsMutation } = useMutationWithFeedback(
    BudgetService.remove,
    {
      successMessage: 'Element został usunięty',
      onSuccess: async () => {
        await queryClient.refetchQueries([PARTIAL_CATEGORIES_QUERY]);
        await queryClient.refetchQueries([BUDGET_QUERY]);
      },
    },
  );

  const deleteRecords = (ids) => deleteRecordsMutation({ ids });

  const tableDefinition = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 'amount',
      label: 'Planowane wydatki',
      renderCell: (row) => <Money inCents={row.amountInCents} />,
    },
    {
      id: 'current-amount',
      label: 'Obecna kwota',
      renderCell: (row) => <Money inCents={row.currentSpending} />,
    },
    {
      id: 'status',
      label: 'Status',
      renderCell: (row) => {
        if (row.currentSpending === row.amountInCents) return 'Wykorzystany';
        if (row.currentSpending > row.amountInCents) return 'Przekroczone';
        if (row.currentSpending < row.amountInCents) return 'W normie';
      },
    },
    {
      id: 'createdAt',
      label: 'Data utworzenia',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
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
