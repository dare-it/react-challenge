import { LedgerService } from 'api';
import { useSnackbar } from 'notistack';
import { BUDGET_QUERY, LEDGER_QUERY, SUMMARY_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const addLedger = (requestBody) => LedgerService.create({ requestBody });

export const useAddLedger = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(addLedger, {
    onSuccess: async (data) => {
      await Promise.all([
        queryClient.refetchQueries([LEDGER_QUERY]),
        queryClient.refetchQueries([SUMMARY_QUERY]),
        queryClient.refetchQueries([BUDGET_QUERY]),
      ]);
      if (data.mode === 'EXPENSE') {
        enqueueSnackbar('Wydatek został zapisany', { variant: 'success' });
      } else {
        enqueueSnackbar('Wpływ został dodany', { variant: 'success' });
      }
    },
    onError: async () => {
      enqueueSnackbar('Wystąpił nieoczekiwany błąd', { variant: 'error' });
    },
  });
};
