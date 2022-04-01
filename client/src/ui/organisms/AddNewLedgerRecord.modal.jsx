import React from 'react';
import { Box, TextField } from '@mui/material';
import { useQueryClient, useQuery } from 'react-query';
import * as PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

import { CategoryService, LedgerService } from 'api';
import { Modal, CategoryField, Loader, Error, NoContent } from 'ui';
import { formatDollarsToCents } from 'utils';
import {
  LEDGER_QUERY,
  CATEGORIES_QUERY,
  BUDGET_QUERY,
  SUMMARY_QUERY,
} from 'queryKeys';
import { useMutationWithFeedback } from 'hooks';

const translationKeys = {
  income: {
    title: 'wpływ',
    successMessage: 'Wpływ został dodany',
  },
  expense: {
    title: 'wydatek',
    successMessage: 'Wydatek został zapisany',
  },
};

export const AddNewLedgerRecordModal = ({ open, onClose, type }) => {
  const queryClient = useQueryClient();
  const { handleSubmit, control, formState, reset } = useForm({
    mode: 'onChange',
  });

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery(CATEGORIES_QUERY, () => CategoryService.findAll());

  const { mutate: saveRecord } = useMutationWithFeedback(LedgerService.create, {
    successMessage: translationKeys?.[type.toLowerCase()]?.successMessage,
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
      await queryClient.refetchQueries([BUDGET_QUERY]);
      await queryClient.refetchQueries([SUMMARY_QUERY]);
      handleClose();
    },
  });

  const onSubmit = async (formData) => {
    if (!formState.isValid) return;

    saveRecord({
      requestBody: {
        title: formData.title,
        amountInCents: formatDollarsToCents(formData.amount),
        mode: type,
        categoryId: formData.categoryId,
      },
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
      title={`Dodaj ${translationKeys?.[type.toLowerCase()]?.title}`}
    >
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {!isLoading && !error && !categories?.length ? (
        <NoContent />
      ) : (
        <Box component="form" autoComplete="off" noValidate>
          <Controller
            control={control}
            name="title"
            defaultValue=""
            type="text"
            rules={{
              validate: (field) => {
                if (!field.toString().trim()) {
                  return 'Nazwa nie może być pusta';
                }
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                margin={'normal'}
                fullWidth
                label="Nazwa"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            rules={{
              setValueAs: (value) => value.trim(),
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
          {type === 'EXPENSE' && (
            <Controller
              name="categoryId"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
          )}
        </Box>
      )}
    </Modal>
  );
};

AddNewLedgerRecordModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  type: PropTypes.string,
};
