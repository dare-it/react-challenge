import { Box, Typography } from '@mui/material';
import NoContentImg from '../../assets/no_content.png';
import { theme } from '../../theme';
import { muiStylesNoContent } from './styles';

export const NoContent = () => {
  return (
    <Box sx={muiStylesNoContent.container}>
      <Box alt="img-no-content" component="img" src={NoContentImg} />
      <Typography sx={muiStylesNoContent.text}>
        Brak danych do wyświetlenia
      </Typography>
    </Box>
  );
};
