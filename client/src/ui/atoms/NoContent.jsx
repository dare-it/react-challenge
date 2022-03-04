import { Box, Typography } from '@mui/material';
import noContent from '../../assets/no_content.png';

export const NoContent = () => {
  
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
      <img style = {styles.image}src={noContent} alt="no content" />
      <div style = {styles.text}>Brak danych do wyświetlenia</div>
    </Box>
    );
};
