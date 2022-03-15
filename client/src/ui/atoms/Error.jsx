import './style.css';
import { Box, Typography } from '@mui/material';
import pic from '../../assets/unknown_error.png';

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
          <img src={pic} class="center" alt="Wystąpił nieoczekiwany błąd" />
          <Typography
            sx={{
              color: 'rgba(51,51, 51, 0.5)',
              fontFamily: 'Inter',
              fontSize: '19.2px',
              fontWeight: 400,
              margin: '0px',
            }}
          >
            {'Wystąpił nieoczekiwany błąd'}
          </Typography>
        </>
      )}
    </Box>
  );
};
