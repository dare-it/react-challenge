import { useForm, FormProvider } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { CATEGORIES_QUERY, BUDGET_QUERY } from 'queryKeys';
import { useShowSnackbar } from '../../hooks/useShowSnackbar';
import { CategoryService, BudgetService } from 'api';
import { formatDollarsToCents } from 'utils';
import { Modal, FormTextField, Select } from 'ui';

export const AddNewBudgetRecord = ({ open, close }) => {
  const queryClient = useQueryClient();
  const showSnackbar = useShowSnackbar();
  const methods = useForm({
    defaultValues: {
      amountInCents: '',
      categoryId: '',
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const { data } = useQuery(CATEGORIES_QUERY, (unlinkedToBudget) =>
    CategoryService.findAll(unlinkedToBudget),
  );

  const { mutate } = useMutation(BudgetService.create, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(BUDGET_QUERY);
      await queryClient.invalidateQueries(CATEGORIES_QUERY);
      onClose();
      showSnackbar('Budżet został zdefiniowany', 'success');
    },
    onError: () => {
      showSnackbar('Wystąpił nieoczekiwany błąd', 'error');
    },
  });

  const onSubmit = (inputData) => {
    mutate({
      requestBody: {
        amountInCents: Number(formatDollarsToCents(inputData.amountInCents)),
        categoryId: inputData.categoryId,
      },
    });
  };

  const onClose = () => {
    reset();
    close();
  };

  return (
    <Modal
      title="Zdefiniuj budżet"
      open={open}
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      disabled={!isValid}
    >
      <FormProvider {...methods}>
        <form>
          <FormTextField
            type="number"
            name="amountInCents"
            label="Kwota"
            rules={{
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
          <Select options={data} name="categoryId" label="Kategoria" />
        </form>
      </FormProvider>
    </Modal>
  );
};
