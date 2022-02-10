import { Box, Typography } from '@mui/material';
import unknown_error from '../../unknown_error.png'

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
        ) :(<><Typography> Wystąpił nieoczekiwany błąd</Typography><img src={unknown_error} /></>)
      }
    </Box>
  );
};
