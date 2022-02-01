import { Box, Typography } from '@mui/material';
import NoContentImg from '../../assets/no_content.png';
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
      <Box alt="img-no-content" component="img" src={NoContentImg} />
      <Typography
        sx={{
          fontWeight: '400',
          color: theme.palette.text.errorMessage,
        }}
      >
        Brak danych do wyświetlenia
      </Typography>
    </Box>
  );
};
