import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
} from '@mui/material';
import * as PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const inputStyles = {
  width: '100%',
};

export const Select = ({
  elementName,
  control,
  label,
  validationRules,
  labelId,
  menuItems,
  sx,
}) => (
  <Controller
    name={elementName}
    control={control}
    rules={validationRules}
    render={({ field, fieldState }) => (
      <FormControl sx={{ ...inputStyles, ...sx }} error={!!fieldState.error}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <MuiSelect {...field} labelId={labelId} label={label}>
          {menuItems}
        </MuiSelect>
        {!!fieldState.error && (
          <FormHelperText>{fieldState.error.message}</FormHelperText>
        )}
      </FormControl>
    )}
  />
);

Select.propTypes = {
  elementName: PropTypes.string.isRequired,
  control: PropTypes.object,
  label: PropTypes.string,
  labelId: PropTypes.string,
  validationRules: PropTypes.object,
  menuItems: PropTypes.arrayOf(PropTypes.element),
  sx: PropTypes.object,
};
