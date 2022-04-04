import noContent from '../../assets/no_content.png';
import { Box, Typography } from '@mui/material';
import * as React from 'react';

export const NoContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={noContent} alt="" />
      <Typography variant="p">Brak danych do wyświetlenia</Typography>
    </Box>
  );
};