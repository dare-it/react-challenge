import { Box, Typography } from '@mui/material';
import unknownError from 'assets/unknown_error.png'


export const Error = ({ error }) => {
  return (
    <Box
      //Center via Flex Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'text.secondary',
        fontWeight: '400',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {
        // error?.message?.includes('Network Error') ? (

        //Added error message
        <>
          <img src={unknownError} />
          <Typography>Wystąpił nieoczekiwany błąd</Typography>
        </>
        // ) : null //  TODO in TASK 1
      }
    </Box>
  );
};
