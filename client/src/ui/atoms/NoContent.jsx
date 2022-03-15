import './style.css';
import pic from '../../assets/no_content.png';
import { Box, Typography } from '@mui/material';

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
      <img src={pic} class="center" alt="Brak danych do wyświetlenia" />
      <Typography
        sx={{
          color: 'rgba(51,51, 51, 0.5)',
          fontFamily: 'Inter',
          fontSize: '19.2px',
          fontWeight: 400,
        }}
      >
        {'Brak danych do wyświetlenia'}
      </Typography>
    </Box>
  );
};
