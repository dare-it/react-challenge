import { useBudgets, useDeleteBudget } from 'hooks';
import { Error, Loader, NoContent, Table } from 'ui';

import { budgetHeadCells, getUniqueId } from './BudgetTable.widget.utils';

export const BudgetTableWidget = () => {
  const { error, isLoading, isError, data } = useBudgets();

  const deleteBudget = useDeleteBudget();

  const deleteRecords = (recordIds) => {
    deleteBudget.mutate(recordIds);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
      {data && data.length > 0 && (
        <Table
          rows={data}
          headCells={budgetHeadCells}
          getUniqueId={getUniqueId}
          deleteRecords={deleteRecords}
        />
      )}
      {data && data.length === 0 && !isLoading && !isError && <NoContent />}
    </>
  );
};
