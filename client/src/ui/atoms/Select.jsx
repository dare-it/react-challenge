import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { MenuItem, Select as MuiSelect } from '@mui/material';
import { CategoryCell, Loader, Error, NoContent } from 'ui';
import { useQuery, useQueryClient } from 'react-query';
import { CATEGORIES_QUERY } from 'queryKeys';
import { CategoryService } from 'api';

export const Select = ({}) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(CATEGORIES_QUERY, () =>
    CategoryService.findAll(),
  );

  const [category, setCategory] = React.useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  console.log(isLoading);
  console.log(error);
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!data?.length) {
    return <NoContent />;
  }

  return (
    <Box sx={{}}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Wybierz kategorie</InputLabel>
        <MuiSelect
          labelId="simple-select-label"
          id="simple-selsct"
          value={category}
          label="Wybierz kategorie"
          onChange={handleChange}
        >
          {data.map((category) => (
            <MenuItem value={category.id} key={category.name}>
              <CategoryCell color={category?.color} name={category?.name} />
            </MenuItem>
          ))}
          ;
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
