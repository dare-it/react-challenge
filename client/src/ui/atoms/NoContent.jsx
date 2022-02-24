<<<<<<< HEAD
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
=======
import { Box, Typography } from '@mui/material';
import NoContentImage from 'assets/no_content.png';

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
      <img
        alt=""
        width={202}
        height={202}
        src={NoContentImage}
        loading="lazy"
      />
      <Typography
        textAlign={'center'}
        mb={2}
        sx={{
          color: '#33333350',
        }}
      >
        Brak danych do wyświetlenia
      </Typography>
    </Box>
  );
>>>>>>> upstream/task-2-solution
};
