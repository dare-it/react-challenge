import { Box, Typography } from '@mui/material';
import React from 'react';
import errorImg from '../../assets/unknown_error.png'


export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : (
          <React.Fragment>
             <Box
                component="img"
                sx={{
                  height: 248,
                  width: 248,
                }}
                alt=""
                src={errorImg}
              />
               <Typography  variant="body1" sx={ (theme) => ({
                  fontFamily: theme.typography.fontFamily,
                  color: theme.palette.greys.level4 })
                  }
                >
                  Wystąpił nieoczekiwany błąd
                </Typography>
          </React.Fragment>
        )
      }
    </Box>
  );
};
