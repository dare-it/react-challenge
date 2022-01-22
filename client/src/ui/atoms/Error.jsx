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
          <Typography sx={{
            fontWeight: '400',
            fontSize: '19.2px',
            lineHeight: '29px',
            color: 'rgba(51, 51, 51, 0.5)'
          }}
          >Wystąpił nieoczekiwany błąd</Typography>
        ) : null
      }
    </Box>
  );
};
