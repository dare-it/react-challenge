import { Box, Typography } from '@mui/material';
import ErrorImg from '../../assets/unknown_error.png';
import { muiStylesError } from './styles';

export const Error = ({ error }) => {
  return (
    <Box sx={muiStylesError.container}>
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <>
          <Box alt="image-unknown-error" component="img" src={ErrorImg} />
          <Typography sx={muiStylesError.text}>
            Wystąpił nieoczekiwany błąd
          </Typography>
        </>
      )}
    </Box>
  );
};
