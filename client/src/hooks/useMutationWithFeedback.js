import { useMutation } from 'react-query';
import { useSnackbar } from 'notistack';

export const useMutationWithFeedback = (request, options = {}) => {
  const {
    onSuccess = () => {},
    onError = () => {},
    successMessage = 'Akcja zakończona sukcesem.',
    errorMessage = 'Wystąpił nieoczekiwany błąd.',
    ...rest
  } = options;
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(request, {
    onSuccess: async () => {
      enqueueSnackbar(successMessage, { variant: 'success' });
      onSuccess();
    },
    onError: () => {
      enqueueSnackbar(errorMessage, { variant: 'error' });
      onError();
    },
    ...rest,
  });
};
