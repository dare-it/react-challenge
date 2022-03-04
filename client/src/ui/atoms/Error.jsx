import { Box, Typography } from '@mui/material';
import unknownError from '../../assets/unknown_error.png';

export const Error = ({ error }) => {
  const styles = {
    text: {
      color: "#333",
      fontSize: "19.2px"
    },
    image: {
      width: "202px",
      height: "202px"
    },
  }

  const content =<>
    <img style = {styles.image}src={unknownError} alt="no content" />
    <div style = {styles.text}>Wystąpił nieoczekiwany błąd</div>
  </>
  

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : content
      }
    </Box>
  );
};
