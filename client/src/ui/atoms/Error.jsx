import { Box, Typography } from '@mui/material';
import * as PropTypes from 'prop-types';

import UnknownError from '../../assets/unknown_error.png';
import UnknownError2x from '../../assets/unknown_error_2x.png';
import { InfoWithCaption } from './InfoWithCaption';

const Image1x = UnknownError;
const Image2x = `${UnknownError2x} 2x`;
const unkownErrorText = 'Wystąpił nieoczekiwany błąd';
const imageMaxWidth = 248;
const imageMaxHeight = 248;

export const Error = ({ error }) => (
  <Box
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
      <InfoWithCaption
        imageCaption={unkownErrorText}
        imageMaxWidth={imageMaxWidth}
        imageMaxHeight={imageMaxHeight}
        imageSrc={Image1x}
        imageSrcset={Image2x}
      />
    )}
  </Box>
);

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
