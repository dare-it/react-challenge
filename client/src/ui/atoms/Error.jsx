import { Box, Typography } from '@mui/material';
import image from 'assets/unknown_error.png';
import '@fontsource/inter';

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
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <>
          <Box
            component="img"
            alt="no data"
            src={image}
            sx={{
              display: 'table',
              margin: '0 auto',
            }}
          ></Box>
          <Typography
            sx={{
              fontFamily: 'Inter',
            }}
          >
            Wystąpił nieoczekiwany błąd
          </Typography>
        </>
      )}
    </Box>
  );
};
