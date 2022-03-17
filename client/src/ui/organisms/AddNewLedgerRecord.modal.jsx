import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { CategorySelect, Modal } from 'ui';
import { INCOME, EXPENSE } from 'ledgerKeys';
import { LedgerService, CategoryService } from 'api';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { formatDollarsToCents, matchTwoDecimalPlaces } from 'utils';
import { LEDGER_QUERY, CATEGORIES_QUERY, SUMMARY_QUERY } from 'queryKeys';
import { Box } from '@mui/material';

export const AddNewLedgerRecord = (props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      amount: '',
      categoryId: '',
    },
  });

  const { data } = useQuery(CATEGORIES_QUERY, () => CategoryService.findAll());
  const queryClient = useQueryClient();
  const mutation = useMutation((data) => LedgerService.create(data), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(LEDGER_QUERY);
      await queryClient.invalidateQueries(SUMMARY_QUERY);
      await onClose();
    },
  });

  const onSubmit = ({ name, amount, categoryId = null }) => {
    const amountInCents = formatDollarsToCents(amount.replace(',', '.'));
    const title = name.trim();

    const requestBody = {
      amountInCents,
      title,
      categoryId,
      mode: props.mode,
    };

    mutation.mutate({ requestBody: requestBody });
  };

  const onClose = () => {
    reset();
    props.onClose();
  };

  return (
    <Modal
      title={props.mode === INCOME ? 'Dodaj wpływ' : 'Dodaj wydatek'}
      {...props}
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
          name={'name'}
          control={control}
          rules={{ required: true, pattern: /^\S*$/ }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              onChange={onChange}
              value={value}
              label={'Nazwa'}
              variant="outlined"
              error={!!error}
              helperText={error ? 'Nazwa nie może być pusta' : null}
            />
          )}
        />
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
              sx={{
                marginTop: '32px',
              }}
            />
          )}
        />
        {props.mode === EXPENSE && (
          <Controller
            name={'categoryId'}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CategorySelect
                onChange={onChange}
                label="Kategoria"
                value={value}
                data={data}
                error={error}
              />
            )}
          />
        )}
      </Box>
    </Modal>
  );
};
