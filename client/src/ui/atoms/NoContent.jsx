import { Box, Typography } from '@mui/material';
import image from '../../assets/no_content.png';
import '@fontsource/inter';

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
        Brak danych do wyświetlania
      </Typography>
    </Box>
  );
};
