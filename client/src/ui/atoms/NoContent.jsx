import { Box, Typography } from "@mui/material";
import noContent from 'assets/no_content.png'

export const NoContent = () => {
  return (
    //Center via Flex
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'text.secondary',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
      }}>
      <img src={noContent} />
      <Typography>Brak danych do wyświetlenia</Typography>
    </Box>
  );
};

