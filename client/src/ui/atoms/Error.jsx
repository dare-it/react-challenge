import { Box, Typography } from '@mui/material';
import errorIcon from '../../assets/unknown_error.png';

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
          {' '}
          <img src={errorIcon} alt="" />
          <Typography variant="p">Wystąpił nieoczekiwany błąd</Typography>
        </>
      )}
    </Box>
  );
};
