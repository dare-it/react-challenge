import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
