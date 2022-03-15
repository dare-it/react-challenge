import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { CategoryCell, Modal } from 'ui';
import { INCOME, EXPENSE } from 'ledgerKeys';
import { LedgerService, CategoryService } from 'api';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import {
  formatDollarsToCents,
  matchTwoDecimalPlaces,
  checkAmountError,
} from 'utils';
import { LEDGER_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const AddNewLedgerRecord = (props) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty, isValid },
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
    onSuccess: () => {
      queryClient.invalidateQueries(LEDGER_QUERY);
    },
  });

  const onSubmit = async ({ name, amount, categoryId = null }) => {
    const amountInCents = formatDollarsToCents(amount.replace(',', '.'));
    const title = name.trim();

    const requestBody = {
      amountInCents,
      title,
      categoryId,
      mode: props.mode,
    };

    try {
      await mutation.mutateAsync({ requestBody: requestBody });
      reset();
      props.onClose();
    } catch (error) {
      // TODO: add information about error for user
      console.log(error);
    }
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
          rules={{ required: true, min: 0.01, max: 1000000.01 }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="number"
              onChange={(e) => matchTwoDecimalPlaces(e, onChange)}
              value={value}
              label={'Kwota'}
              variant="outlined"
              error={!!error}
              helperText={error ? checkAmountError(errors) : null}
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
            render={({ field: { onChange, value } }) => (
              <TextField
                select
                onChange={onChange}
                value={value}
                label={'Kategoria'}
                SelectProps={{
                  IconComponent: () => (
                    <KeyboardArrowDownIcon
                      sx={(theme) => ({
                        color: theme.palette.primary.main,
                        position: 'absolute',
                        right: '18px',
                      })}
                    />
                  ),
                }}
                sx={{
                  marginTop: '32px',
                }}
              >
                {data?.map((category) => {
                  return (
                    <MenuItem value={category.id} key={category.id}>
                      <CategoryCell
                        color={category.color}
                        name={category.name}
                      />
                    </MenuItem>
                  );
                })}
              </TextField>
            )}
          />
        )}
      </Box>
    </Modal>
  );
};
