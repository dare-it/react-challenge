import { Box, Typography } from '@mui/material';
<<<<<<< HEAD
import unknown_error from '../../unknown_error.png'
=======
import ErrorImage from 'assets/unknown_error.png';
>>>>>>> upstream/task-2-solution

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
<<<<<<< HEAD
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) :(<><Typography> Wystąpił nieoczekiwany błąd</Typography><img src={unknown_error} /></>)
      }
=======
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
>>>>>>> upstream/task-2-solution
    </Box>
  );
};
