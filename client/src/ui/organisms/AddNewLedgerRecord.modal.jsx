import { useForm, FormProvider } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  CATEGORIES_QUERY,
  LEDGER_QUERY,
  SUMMARY_QUERY,
  BUDGET_QUERY,
} from 'queryKeys';
import { useShowSnackbar } from '../../hooks/useShowSnackbar';
import { CategoryService, LedgerService } from 'api';
import { formatDollarsToCents } from 'utils';
import { Modal, FormTextField, Select } from 'ui';

export const AddNewLedgerRecord = ({ open, close, type }) => {
  const queryClient = useQueryClient();
  const showSnackbar = useShowSnackbar();
  const methods = useForm({
    defaultValues: {
      title: '',
      amountInCents: '',
      categoryId: '',
      mode: '',
    },
    mode: 'onChange',
  });

  let title;
  if (type === 'INCOME') title = 'Dodaj wpływ';
  if (type === 'EXPENSE') title = 'Dodaj wydatek';

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const { data } = useQuery(CATEGORIES_QUERY, () => CategoryService.findAll());
  const { mutate } = useMutation(LedgerService.create, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(LEDGER_QUERY);
      await queryClient.invalidateQueries(BUDGET_QUERY);
      await queryClient.invalidateQueries(SUMMARY_QUERY);
      onClose();
      showSnackbar(
        type === 'INCOME' ? 'Wpływ został dodany' : 'Wydatek został zapisany',
        'success',
      );
    },
    onError: () => {
      showSnackbar('Wystąpił nieoczekiwany błąd', 'error');
    },
  });

  const onSubmit = (inputData) => {
    mutate({
      requestBody: {
        mode: type,
        amountInCents: Number(formatDollarsToCents(inputData.amountInCents)),
        categoryId: inputData.categoryId,
        title: inputData.title,
      },
    });
  };

  const onClose = () => {
    reset();
    close();
  };

  return (
    <Modal
      title={title}
      open={open}
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      disabled={!isValid}
    >
      <FormProvider {...methods}>
        <form>
          <FormTextField
            type="text"
            name="title"
            label="Nazwa"
            rules={{
              validate: (field) => {
                if (!field.toString().trim()) {
                  return 'Nazwa nie może być pusta';
                }
              },
            }}
          />
          <FormTextField
            type="number"
            name="amountInCents"
            label="Kwota"
            rules={{
              setValueAs: (value) => value.trim(),
              required: {
                value: true,
                message: 'Kwota nie może być pusta',
              },
              max: {
                value: 1000000,
                message: 'Kwota nie może być większa niż 1000000',
              },
              min: {
                value: 1,
                message: 'Kwota musi być większa niż 0',
              },
            }}
          />
          {type === 'EXPENSE' && (
            <Select options={data} name="categoryId" label="Kategoria" />
          )}
        </form>
      </FormProvider>
    </Modal>
  );
};
