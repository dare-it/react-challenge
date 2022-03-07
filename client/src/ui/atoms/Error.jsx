import { Box, Typography } from '@mui/material';
<<<<<<< HEAD
import ErrorImage from 'assets/unknown_error.png';
=======
import unknownError from 'assets/unknown_error.png'

>>>>>>> bf6bf4e1cb33a3acecfb5cabea82c703993f2d5d

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
<<<<<<< HEAD
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            alt=""
            src={ErrorImage}
            style={{
              height: '100%',
              weight: '100%',
              maxHeight: '248px',
              maxWidth: '248px',
            }}
          />
          <Typography sx={{ color: '#33333350' }}>
            Wystąpił nieoczekiwany błąd
          </Typography>
        </Box>
      )}
=======
      {
        // error?.message?.includes('Network Error') ? (

        //Added error message
        <>
          <img src={unknownError} />
          <Typography>Wystąpił nieoczekiwany błąd</Typography>
        </>
        // ) : null //  TODO in TASK 1
      }
>>>>>>> bf6bf4e1cb33a3acecfb5cabea82c703993f2d5d
    </Box>
  );
};
