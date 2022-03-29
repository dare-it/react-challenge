import { LedgerService } from 'api';
import { BUDGET_QUERY, LEDGER_QUERY, SUMMARY_QUERY } from 'queryKeys';
import { useMutation, useQueryClient } from 'react-query';

const deleteLedger = (values) => LedgerService.remove({ ids: values });

export const useDeleteLedger = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteLedger, {
    onSuccess: async () => {
      await Promise.all([
        queryClient.refetchQueries([LEDGER_QUERY]),
        queryClient.refetchQueries([SUMMARY_QUERY]),
        queryClient.refetchQueries([BUDGET_QUERY]),
      ]);
    },
  });
};
