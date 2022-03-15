import { Box, Typography } from '@mui/material';
import NoContentImg from 'assets/no_content.png';
import { theme } from '../../theme';

export const NoContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
      NoContent
      </Typography>
      <img src={NoContentImg} alt='' />
      <Typography
        sx={{
          color: theme.palette.grey.lev4,
        }}
      >
      Brak danych do wyświetlenia
      </Typography>
    </Box>
  );
};

