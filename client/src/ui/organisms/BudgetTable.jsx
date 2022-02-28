import { BUDGET_QUERY } from 'queryKeys';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { CategoryCell, Error, Loader, LocalizedDate, Money, NoContent } from 'ui';
import { Table } from 'ui/molecules/table/Table';

const tableDefinition = [
  { id: 'name', label: 'Nazwa', renderCell: (row) => (
    <CategoryCell color={row.category?.color} name={row.category?.name} />
  ),},
  { id: 'plannedExpenses', label: 'Planowane wydatki', renderCell: (row) => <Money inCents={row.amountInCents} /> },
  { id: 'currentAmount', label: 'Obecna kwota', renderCell: (row) => <Money inCents={row.currentSpending} /> },
  { id: 'status', label: 'Status' },
  { id: 'createdDate', label: 'Data utworzenia' ,  renderCell: (row) => <LocalizedDate date={row.createdAt} />},
];

const BudgetTable = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(BUDGET_QUERY, () =>
    BudgetService.findAll(),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log(error)
    return <Error error={error} />;
  }

  if (!data?.length) {
    return <NoContent />
  }

  return <Table rows={data} getUniqueId={(row) => row.id} headCells={tableDefinition} />;
};

export default BudgetTable;
