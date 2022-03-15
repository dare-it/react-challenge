import { BudgetService } from 'api';
import { BUDGET_QUERY } from 'queryKeys';
import { useQuery } from 'react-query';

const getBudgets = BudgetService.findAll;

export const useBudgets = () => useQuery(BUDGET_QUERY, getBudgets);
