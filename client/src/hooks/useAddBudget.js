import { BudgetService } from 'api';
import { useSnackbar } from 'notistack';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const addBudget = (requestBody) => BudgetService.create({ requestBody });

export const useAddBudget = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(addBudget, {
    onSuccess: async () => {
      await Promise.all([
        queryClient.refetchQueries([BUDGET_QUERY]),
        queryClient.refetchQueries([CATEGORIES_QUERY]),
      ]);
      enqueueSnackbar('Budżet został zdefiniowany', { variant: 'success' });
    },
    onError: async () => {
      enqueueSnackbar('Wystąpił nieoczekiwany błąd', { variant: 'error' });
    },
  });
};
