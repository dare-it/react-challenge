import { Box, Typography } from '@mui/material';
import ErrorImg from '../../assets/unknown_error.png'
import { muiStylesError } from './styles';
import {theme} from '../../theme';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : (<><Box alt="image-unknown-error" component="img" src={ErrorImg} /><Typography sx={{
          fontFamily: "Inter",
          fontWeight: "400",
          color: theme.palette.text.errorMessage
        }}>Wystąpił nieoczekiwany błąd</Typography></>
        )//  TODO in TASK 1
      }
    </Box>
  );
};
