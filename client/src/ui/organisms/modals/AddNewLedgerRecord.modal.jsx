import React from 'react';
import Modal from 'ui/molecules/Modal';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
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
      amount: '',
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

  const renderForm = () => (
    <form
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
      }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            label="Nazwa"
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
            label="Kwota"
            helperText={errors.amount && errors.amount.message}
            {...field}
          />
        )}
      />
      {type === 'EXPENSE' && (
        <FormControl>
          <InputLabel id="select-category-label">Wybierz kategorię</InputLabel>
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <Select labelId="select-category-label" {...field}>
                {categoryList?.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    <CategoryCell color={category.color} name={category.name} />
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText error>
            {errors.categoryId && errors.categoryId.message}
          </FormHelperText>
        </FormControl>
      )}
    </form>
  );

  return (
    <Modal
      {...props}
      handleClose={handleClose}
      disableSaveButton={!!Object.keys(errors).length}
      header={type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek'}
    >
      {renderForm()}
    </Modal>
  );
};

export default AddNewLedgerRecordModal;
