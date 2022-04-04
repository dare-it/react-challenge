import ErrorImage from 'assets/unknown_error.png';

import { Box, Typography, Avatar } from '@mui/material';
import imageError from '../../assets/unknown_error.png';

const errorContent = {
  src: imageError,
  alt: 'Error',
  title: 'Wystąpił nieoczekiwany błąd',
};

export const Error = ({ error }) => {
  const { src, alt, title } = errorContent;
  return (
    <Box
      id="budżet"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error?.message?.includes('Network Error') ? (
        <Typography>Uruchom Server!</Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Avatar
            sx={{
              width: '248px',
              height: '248px',
            }}
            src={src}
            alt={alt}
            variant="square"
          />
          <Typography
            sx={{
              color: 'rgba(51, 51, 51, 0.5)',
              opacity: '50%',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '19.2px',
              lineHeight: '29px',
            }}
          >
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
