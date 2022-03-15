<<<<<<< HEAD
import { Box, Typography } from '@mui/material';
import NoContentImage from 'assets/no_content.png';

export const NoContent = () => {
  return (
=======
import { Box, Typography } from "@mui/material";
import noContent from 'assets/no_content.png'

export const NoContent = () => {
  return (
    //Center via Flex
>>>>>>> bf6bf4e1cb33a3acecfb5cabea82c703993f2d5d
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
<<<<<<< HEAD
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
=======
        color: 'text.secondary',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
      }}>
      <img src={noContent} />
      <Typography>Brak danych do wyświetlenia</Typography>
>>>>>>> bf6bf4e1cb33a3acecfb5cabea82c703993f2d5d
    </Box>
  );
};

