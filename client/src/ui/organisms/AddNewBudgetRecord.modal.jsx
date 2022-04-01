import React from 'react';
import { Box, TextField } from '@mui/material';
import { useQueryClient, useQuery } from 'react-query';
import * as PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';

import { CategoryService, BudgetService } from 'api';
import { Modal, CategoryField, Loader, Error } from 'ui';
import { formatDollarsToCents } from 'utils';
import { BUDGET_QUERY, PARTIAL_CATEGORIES_QUERY } from 'queryKeys';
import { useMutationWithFeedback } from 'hooks';

export const AddNewBudgetRecordModal = ({ open, onClose }) => {
  const queryClient = useQueryClient();

  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange',
  });

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery(PARTIAL_CATEGORIES_QUERY, () => CategoryService.findAll(true));

  const { mutate: saveRecordMutation } = useMutationWithFeedback(
    (requestBody) => BudgetService.create({ requestBody }),
    {
      successMessage: 'Budżet został zdefiniowany',
      onSuccess: async () => {
        await queryClient.refetchQueries([BUDGET_QUERY]);
        await queryClient.refetchQueries([PARTIAL_CATEGORIES_QUERY]);
        handleClose();
      },
    },
  );

  const onSubmit = (formData) => {
    saveRecordMutation({
      amountInCents: formatDollarsToCents(formData.amount),
      categoryId: formData.categoryId,
    });
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      canSubmit={formState.isValid}
      title={`Zdefiniuj budżet`}
    >
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {!isLoading && !error && !categories?.length ? (
        'Wszystkie kategorie są przypisane do budżetu. Aby zredefiniować usuń jeden z wpisów.'
      ) : (
        <Box component="form" noValidate autoComplete="off">
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: 'Kwota nie może być pusta',
              },
              min: {
                value: 0,
                message: 'Kwota musi być większa niż 0',
              },
              max: {
                value: 1000000,
                message: 'Kwota nie może być większa niż 1000000',
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                margin={'normal'}
                fullWidth
                type="number"
                label="Kwota"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="categoryId"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CategoryField
                margin={'normal'}
                fullWidth
                categories={categories}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{
              required: {
                value: true,
                message: 'Wybierz kategorię',
              },
            }}
          />
        </Box>
      )}
    </Modal>
  );
};

AddNewBudgetRecordModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  type: PropTypes.string,
};
