import { Box, Typography } from '@mui/material';
import ErrorImg from '../../assets/unknown_error.png';
import { alpha } from '@mui/material/styles';

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
          <Box component="img" src={ErrorImg} alt="unknown error"></Box>
          <Typography
            sx={{
              color: (theme) => alpha(theme.palette.text.primary, 0.5),
              fontFamily: 'Inter',
              fontWeight: '400',
            }}
          >
            Wystąpił nieoczekiwany błąd
          </Typography>
        </>
      )}
    </Box>
  );
};
