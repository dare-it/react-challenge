import { useForm, FormProvider } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { CATEGORIES_QUERY, LEDGER_QUERY } from 'queryKeys';
import { CategoryService, LedgerService } from 'api';
import { formatDollarsToCents } from 'utils';
import { Modal, FormTextField, Select } from 'ui';

export const AddNewLedgerRecord = ({ open, close, type }) => {
  const queryClient = useQueryClient();
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
  const { mutateAsync } = useMutation(LedgerService.create, {
    onSuccess: () => {
      return queryClient.invalidateQueries(LEDGER_QUERY);
    },
  });

  const onSubmit = async (inputData) => {
    await mutateAsync({
      requestBody: {
        mode: type,
        amountInCents: Number(formatDollarsToCents(inputData.amountInCents)),
        categoryId: inputData.categoryId,
        title: inputData.title,
      },
    });
    close();
    reset();
  };

  const onClose = () => {
    close();
    reset();
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
              required: {
                value: true,
                message: 'Nazwa nie może być pusta',
              },
              pattern: {
                value: /[a-zA-Z]+/,
                message: 'Nazwa nie może być pusta',
              },
            }}
          />
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
          {type === 'EXPENSE' && (
            <Select options={data} name="categoryId" label="Kategoria" />
          )}
        </form>
      </FormProvider>
    </Modal>
  );
};
