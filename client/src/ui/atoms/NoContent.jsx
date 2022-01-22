import * as React from 'react';
import img from './../../assets/no_content.png';
import { Box, Typography } from '@mui/material';

export const NoContent = ({ content }) => {
  return (
  <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}
>
      <img src={img} alt="No content"/>
  {
    content?.message?.includes('No content') ? (
      <Typography sx={{
        fontWeight: '400',
        fontSize: '19.2px',
        lineHeight: '29px',
        color: 'rgba(51, 51, 51, 0.5)'
      }}
      >Brak danych do wyświetlenia</Typography>
    ) : null
  }
</Box>
  )};
