import no_content from '../../no_content.png';
import { Box, Typography } from '@mui/material';

export const NoContent = () => {
  return (
  <>
  <Box >
  <Typography>Brak danych do wyświetlenia </Typography>
  <img src={no_content} />
  </Box>
  </>);
};
