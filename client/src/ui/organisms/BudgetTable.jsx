import { BUDGET_QUERY } from 'queryKeys';
import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Error, Loader, NoContent } from 'ui';
import { Table } from 'ui/molecules/table/Table';

const tableDefinition = [
  { id: 'name', label: 'Nazwa' },
  { id: 'plannedExpenses', label: 'Planowane wydatki' },
  { id: 'currentAmount', label: 'Obecna kwota' },
  { id: 'status', label: 'Status' },
  { id: 'createdDate', label: 'Data utworzenia' },
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
    return <Error error={error} />;
  }

  if (!data?.length) {
    return <NoContent />
  }

  return <Table rows={data} headCells={tableDefinition} />;
};

export default BudgetTable;
