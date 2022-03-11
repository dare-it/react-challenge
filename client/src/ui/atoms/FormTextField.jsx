import { Controller, useFormContext } from 'react-hook-form';
import { TextField as MuiTextField } from '@mui/material';

export const FormTextField = ({ name, label, rules, type }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <MuiTextField
          sx={{ marginTop: '32px' }}
          onChange={onChange}
          value={value}
          variant="outlined"
          label={label}
          fullWidth
          type={type}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};
