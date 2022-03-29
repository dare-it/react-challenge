import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

export const ButtonGroup = ({ children }) => (
  <Stack direction={'row'} spacing={2}>
    {children}
  </Stack>
);

ButtonGroup.propTypes = {
  children: PropTypes.element,
};
