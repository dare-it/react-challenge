import { LedgerService } from 'api';
import { useSnackbar } from 'notistack';
import { BUDGET_QUERY, LEDGER_QUERY, SUMMARY_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const deleteLedger = (values) => LedgerService.remove({ ids: values });

export const useDeleteLedger = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(deleteLedger, {
    onSuccess: async () => {
      await Promise.all([
        queryClient.refetchQueries([LEDGER_QUERY]),
        queryClient.refetchQueries([SUMMARY_QUERY]),
        queryClient.refetchQueries([BUDGET_QUERY]),
      ]);
      enqueueSnackbar('Element został usunięty', { variant: 'success' });
    },
    onError: async () => {
      enqueueSnackbar('Wystąpił nieoczekiwany błąd', {
        variant: 'error',
      });
    },
  });
};
