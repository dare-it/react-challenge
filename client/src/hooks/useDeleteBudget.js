import { BudgetService } from 'api';
import { useSnackbar } from 'notistack';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const deleteBudget = (values) => BudgetService.remove({ ids: values });

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(deleteBudget, {
    onSuccess: async () => {
      await Promise.all([
        queryClient.refetchQueries([BUDGET_QUERY]),
        queryClient.refetchQueries([CATEGORIES_QUERY]),
      ]);
      enqueueSnackbar('Element został usunięty', { variant: 'success' });
    },
    onError: async () => {
      enqueueSnackbar('Wystąpił nieoczekiwany błąd', { variant: 'error' });
    },
  });
};
