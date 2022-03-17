import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Modal, CategorySelect } from 'ui';
import { BudgetService } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { formatDollarsToCents, matchTwoDecimalPlaces } from 'utils';
import { BUDGET_QUERY, PARTIAL_CATEGORIES_QUERY } from 'queryKeys';
import { Box } from '@mui/material';

export const AddNewBudgetRecord = (props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: '',
      categoryId: '',
    },
  });

  const queryClient = useQueryClient();
  const mutation = useMutation((data) => BudgetService.create(data), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(BUDGET_QUERY);
      await queryClient.invalidateQueries(PARTIAL_CATEGORIES_QUERY);
      await onClose();
    },
  });

  const onSubmit = ({ amount, categoryId }) => {
    const amountInCents = formatDollarsToCents(amount.replace(',', '.'));

    const requestBody = {
      amountInCents,
      categoryId,
    };

    mutation.mutate({ requestBody: requestBody });
  };

  const onClose = () => {
    reset();
    props.onClose();
  };

  return (
    <Modal
      {...props}
      title="Zdefiniuj budżet"
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      disabled={!isDirty || !isValid}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          margin: '37px 0 45px 0',
        }}
      >
        <Controller
          name={'amount'}
          control={control}
          rules={{
            required: { value: true, message: 'Kwota nie może być pusta' },
            min: { value: 0.01, message: 'Kwota musi być większa niż 0' },
            max: {
              value: 1000000.01,
              message: 'Kwota nie może być większa niż 1000000',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="number"
              onChange={(e) => matchTwoDecimalPlaces(e, onChange)}
              value={value}
              label={'Kwota'}
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name={'categoryId'}
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <CategorySelect
              onChange={onChange}
              label="Kategoria"
              value={value}
              data={props.data}
              error={error}
            />
          )}
        />
      </Box>
    </Modal>
  );
};
