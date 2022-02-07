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
                alt="Error"
                src={errorImg}
              />
               <Box sx={ (theme) => ({
                  typography: 'body1',
                  fontFamily: theme.typography.fontFamily,
                  color: theme.palette.greys.level4 })
                  }
                >
                  Wystąpił nieoczekiwany błąd
                </Box>
          </React.Fragment>
        )
      }
    </Box>
  );
};
