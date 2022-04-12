import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

export const Page = ({ title = null, children }) => (
  <Box id={title.toLowerCase().split(' ').join('_')}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
);
