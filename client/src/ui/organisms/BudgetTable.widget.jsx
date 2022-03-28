import { useBudgets, useDeleteBudget } from 'hooks';

import { budgetHeadCells, getUniqueId } from './BudgetTable.widget.utils';
import { TableWidget } from './Table.widget';

export const BudgetTableWidget = () => {
  const tableConfig = {
    getDataHook: useBudgets,
    deleteDataHook: useDeleteBudget,
    tableHeadCells: budgetHeadCells,
    getUniqueId,
  };

  return <TableWidget tableConfig={tableConfig} />;
};
