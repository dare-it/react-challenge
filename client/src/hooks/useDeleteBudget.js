import { BudgetService } from 'api';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const deleteBudget = (values) => BudgetService.remove({ ids: values });

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBudget, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(BUDGET_QUERY);
      await queryClient.invalidateQueries(CATEGORIES_QUERY);
    },
  });
};
