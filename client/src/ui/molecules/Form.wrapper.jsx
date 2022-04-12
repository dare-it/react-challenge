import { Box, Stack } from '@mui/material';
import * as PropTypes from 'prop-types';

export const FormWrapper = ({ children }) => (
  <Box component={'form'} autoComplete={'off'} noValidate>
    <Stack direction={'column'} spacing={4}>
      {children}
    </Stack>
  </Box>
);

FormWrapper.propTypes = {
  children: PropTypes.element,
};
