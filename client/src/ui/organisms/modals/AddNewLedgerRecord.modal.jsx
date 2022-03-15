import React from 'react';
import Modal from 'ui/molecules/Modal';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, Select, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { ledgerValidatoin } from 'utils/schemas';
import { CategoryService, LedgerService } from 'api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CategoryCell } from 'ui';
import { formatDollarsToCents } from 'utils';

const AddNewLedgerRecordModal = ({ type, ...props }) => {
  const queryClient = useQueryClient();

  const { data: categoryList } = useQuery('categoryData', () =>
    CategoryService.findAll(),
  );

  const createLedger = (newLedger) => {
    return LedgerService.create({ requestBody: newLedger });
  };

  const { mutate } = useMutation(createLedger, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('ledgerData');
    },
  });


  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      categoryId: '',
    },
    resolver: yupResolver(ledgerValidatoin),
  });

  const handleClose = () => {
    props.handleClose();
    reset();
  };

  const onSubmit = (data) => {
    const parsedData = {
      mode: type,
      title: data.name,
      amountInCents: formatDollarsToCents(parseInt(data.amount)),
      categoryId: data.categoryId,
    };

    mutate(parsedData);
    handleClose();
  };

  return (
    <Modal
      {...props}
      handleAccept={handleSubmit(onSubmit)}
      handleClose={handleClose}
      disableSaveButton={!!Object.keys(errors).length}
      children={
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'spaceBetween',
          }}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                error={errors.name}
                helperText={errors.name && errors.name.message}
                {...field}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <TextField
                error={errors.amount}
                helperText={errors.amount && errors.amount.message}
                {...field}
              />
            )}
          />
          {type === 'EXPENSE' && (
            <Controller
              name="categoryId"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  {categoryList?.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      <CategoryCell
                        color={category.color}
                        name={category.name}
                      />
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          )}
          {/* <input type="submit" /> */}
        </form>
      }
      header={type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek'}
    />
  );
};

export default AddNewLedgerRecordModal;
