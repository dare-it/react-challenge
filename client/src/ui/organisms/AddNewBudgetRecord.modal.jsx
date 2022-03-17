import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { CategoryCell, Modal } from 'ui';
import { BudgetService } from 'api';
import { useMutation, useQueryClient } from 'react-query';
import { formatDollarsToCents, matchTwoDecimalPlaces, checkAmountError } from 'utils';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const AddNewBudgetRecord = (props) => {

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      amount: '',
      categoryId: ''
    },
  });

  const queryClient = useQueryClient();
  const mutation = useMutation((data) => BudgetService.create(data), {
    onSuccess: () => {queryClient.invalidateQueries(BUDGET_QUERY); queryClient.invalidateQueries(CATEGORIES_QUERY)}
  })

  const onSubmit = async ({ amount, categoryId }) => {
    const amountInCents = formatDollarsToCents(amount.replace(',', '.'));

    const requestBody = {
      amountInCents,
      categoryId,
    }

    try {
     await  mutation.mutateAsync({requestBody:  requestBody})
     await  reset()
     await props.onClose()
    } catch (error) {
      // TODO: add information about error for user
      console.log(error)
    }

  }

  const onClose = () => {
    reset()
    props.onClose()
  }

  return (
    <Modal 
      {...props}
      title="Zdefiniuj budżet"
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      disabled={ !isDirty || !isValid}
    >
        <Box 
         sx={{
           display: 'flex',
           justifyContent: 'space-between',
           flexDirection: 'column',
           margin: '37px 0 45px 0'
         }}
      >
        <Controller
        name={'amount'}
        control={control}
        rules={{ required: true, min: 0.01, max: 1000000.01 }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            type='number'
            onChange={(e) => matchTwoDecimalPlaces(e, onChange)}
            value={value}
            label={'Kwota'}
            variant="outlined"
            error={!!error}
            helperText={error ? checkAmountError(errors) : null}
          />
        )}
      />
       <Controller
            name={'categoryId'}
            control={control}
            rules={{ required: true}}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
              select
                onChange={onChange}
                value={value}
                label={'Kategoria'}
                error={!!error}
                helperText={ error && 'Wybierz kategorię'}
                SelectProps={{
                  IconComponent: () => (<KeyboardArrowDownIcon 
                    sx={(theme) =>({color: theme.palette.primary.main, position:'absolute', right: '18px'})}
                    />)
                }}
                sx={{
                  marginTop: '32px'
                }}
              >
                {
                  props.data?.map(category => {
                    return <MenuItem value={category.id} key={category.id}>
                        <CategoryCell color={category.color} name={category.name} />
                      </MenuItem>
                  })
                }
                
              </TextField>
            )}
          />
          </Box>
    </Modal>
  )
};
