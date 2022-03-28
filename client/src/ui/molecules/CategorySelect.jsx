import React from 'react';
import TextField from '@mui/material/TextField';
import { CategoryCell } from 'ui';
import { MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const CategorySelect = ({ data, value, onChange, label, error }) => {
  return (
    <TextField
      select
      onChange={onChange}
      value={value}
      label={label}
      error={!!error}
      helperText={error && 'Wybierz kategorię'}
      SelectProps={{
        IconComponent: () => (
          <KeyboardArrowDownIcon
            sx={(theme) => ({
              color: theme.palette.primary.main,
              position: 'absolute',
              right: '18px',
            })}
          />
        ),
      }}
      sx={{
        marginTop: '32px',
      }}
    >
      {data?.map((category) => {
        return (
          <MenuItem value={category.id} key={category.id}>
            <CategoryCell color={category.color} name={category.name} />
          </MenuItem>
        );
      })}
    </TextField>
  );
};
