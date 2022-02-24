import { useQuery, useQueryClient, useMutation } from 'react-query';

import { Error, Loader, NoContent, LocalizedDate, Money, Table, CategoryCell } from 'ui';
import { BudgetService } from '../../api/services/BudgetService';

export function BudgetWidget() {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery('tableData', () => BudgetService.findAll());

  const mutation = useMutation(
    (ids) => {
      BudgetService.remove({ ids })
        .then(() => queryClient.invalidateQueries('tableData'));
    }
  );

  const deleteRecords = id => {
    mutation.mutate(id);
  }

  const getStatusText = (budget) => {
    if (budget.currentSpending === budget.amountInCents) {
      return 'Wykorzystany';
    } else if (budget.currentSpending > budget.amountInCents) {
      return 'Przekroczony';
    } else {
      return 'W normie';
    }
}

const columns = [
  {id: 'category-name', label: 'Nazwa', renderCell: (row) =>  <CategoryCell color={row.category?.color} name={row.category?.name} />},
  {id: 'planned-amount', label: 'Planowane wydatki', renderCell: (row) => <Money inCents={row.amountInCents} />},
  {id: 'current-spending', label: 'Obecna kwota', renderCell: (row) => <Money inCents={row.currentSpending} />},
  {id: 'status', label: 'Status', renderCell: (row) => getStatusText(row)},
  {id: 'created-at', label: 'Data utworzenia', renderCell: (row) => <LocalizedDate date={row.createdAt} />},
];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />
  }

  if (data?.length === 0) {
    return <NoContent />;
  }

  if (data?.length) {
    return <Table headCells={columns}
                  rows={data}
                  deleteRecords={(ids) => deleteRecords(ids)}
                  getUniqueId={(row) => row.id} />
  }

  return <Error />
}
