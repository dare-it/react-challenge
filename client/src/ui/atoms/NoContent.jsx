import NoContentImg from '../../assets/no_content.png';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';

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
      <Box component="img" src={NoContentImg} alt="no content"></Box>
      <Typography
        sx={{
          color: (theme) => alpha(theme.palette.text.primary, 0.5),
          fontFamily: 'Inter',
          fontWeight: '400',
        }}
      >
        Brak danych do wyświetlenia
      </Typography>
    </Box>
  );
};
