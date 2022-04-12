// import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { CategoryCell } from 'ui';

export const Select = ({ options, name, label }) => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth sx={{ marginTop: '32px' }}>
      <InputLabel sx={{ color: '#80848D' }}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        rules={{
          required: {
            value: true,
            message: 'Wybierz kategorie',
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <MuiSelect
            value={value}
            label={label}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          >
            {options?.map((option) => {
              return (
                <MenuItem value={option.id} key={option.id}>
                  <CategoryCell color={option.color} name={option.name} />
                </MenuItem>
              );
            })}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
};
