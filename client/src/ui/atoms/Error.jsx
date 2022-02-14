import { Box, Typography } from '@mui/material';
import errorImg from '../../assets/unknown_error.png';

export const Error = ({ error }) => {
  return (
    <Box 
  
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        typography: {
          color: 'rgba(51, 51, 51, 0.5)',
          ml: '0px',
          mt: '202px'                 
        },
        
      }}
    >
    <img src= {errorImg} alt = "unknown error" />
    
      {
        error?.message?.includes('Network Error') ? (
          <Typography width= '261px' height='29px' >Wystąpił nieoczekiwany błąd</Typography>
       ):'Wystąpił nieoczekiwany błąd' //  TODO in TASK 1
      }
    </Box>
  );
};
