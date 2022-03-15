import { Box, Typography } from '@mui/material';
import ErrorImg from 'assets/unknown_error.png';
import { theme } from '../../theme';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                fontSize: 64,
                fontWeight: 700,
                letterSpacing:'-0.01em',
                lineHeight: '77px',
                marginBottom: '60px',
              }}
            >
              Error
            </Typography>
            <img src={ErrorImg} alt='' />
            <Typography
              sx={{
                color: theme.palette.grey.lev4,
              }}
            >
              {error}
            </Typography>
          </Box>
        ) //  TODO in TASK 1
      }
    </Box>
  );
};
