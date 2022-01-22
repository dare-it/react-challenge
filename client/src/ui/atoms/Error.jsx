import * as React from 'react';
import img from './../../assets/unknown_error.png';
import { Box, Typography } from '@mui/material';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
          <img src={img} alt="Unexpected Error"/>
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Wystąpił nieoczekiwany błąd</Typography>
        ) : null
      }
    </Box>
  );
};
