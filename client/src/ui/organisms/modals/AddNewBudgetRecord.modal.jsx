import { BudgetService, CategoryService } from 'api';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Modal from 'ui/molecules/Modal';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, Select, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { budgetValidation } from 'utils/schemas';
import { CategoryCell } from 'ui';
import { formatDollarsToCents } from 'utils';

const AddNewBudgetRecordModal = ({ type, ...props }) => {
  const queryClient = useQueryClient();

  const { data: categoryList } = useQuery('categoryData', () =>
    CategoryService.findAll(),
  );

  const createBudget = (newBudget) => {
    return BudgetService.create({ requestBody: newBudget });
  };

  const { mutate } = useMutation(createBudget, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('budgetData');
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(budgetValidation),
  });

  const handleClose = () => {
    props.handleClose();
    reset();
  };

  const onSubmit = (data) => {
    const parsedData = {
      amountInCents: formatDollarsToCents(parseInt(data.amount)),
      categoryId: data.categoryId,
    };

    mutate(parsedData);
    handleClose();
  };

  const renderForm = () => (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
      }}
    >
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

      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          <Select label="Wybierz kategorię" {...field}>
            {categoryList?.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                <CategoryCell color={category.color} name={category.name} />
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </form>
  );

  return (
    <Modal
      {...props}
      header="Zdefiniuj budżet"
      handleAccept={handleSubmit(onSubmit)}
      handleClose={handleClose}
      disableSaveButton={!!Object.keys(errors).length}
    >
      {renderForm()}
    </Modal>
  );
};

export default AddNewBudgetRecordModal;
