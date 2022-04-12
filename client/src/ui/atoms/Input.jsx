/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@mui/material';
import * as PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { blockInvalidNumberChars } from 'utils';

const inputStyles = {
  width: '100%',
};

export const Input = ({
  elementName,
  control,
  label,
  validationRules,
  inputProps,
  type,
  sx,
}) => (
  <Controller
    name={elementName}
    control={control}
    rules={validationRules}
    render={({ field, fieldState }) => (
      <TextField
        {...field}
        helperText={fieldState.error ? fieldState.error.message : null}
        error={!!fieldState.error}
        label={label}
        variant={'outlined'}
        type={type}
        onKeyDown={(e) => {
          if (type === 'number') {
            blockInvalidNumberChars(e);
          }
        }}
        onChange={(e) => {
          if (type === 'number') {
            const isValidNumber = !Number.isNaN(parseFloat(e.target.value));
            // eslint-disable-next-line no-unused-expressions
            isValidNumber
              ? field.onChange(parseFloat(e.target.value))
              : field.onChange(e.target.value);
          } else field.onChange(e.target.value);
        }}
        inputProps={inputProps}
        sx={{ ...inputStyles, ...sx }}
      />
    )}
  />
);

Input.propTypes = {
  elementName: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  validationRules: PropTypes.object,
  inputProps: PropTypes.object,
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  sx: PropTypes.object,
};
