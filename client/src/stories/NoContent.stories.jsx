import React from 'react';

import { NoContent } from '../ui';
import { ThemeProvider } from '@mui/material';
import theme from '../theme'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/NoContent',
  component: NoContent,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
  <ThemeProvider theme={theme}>
    <NoContent />
  </ThemeProvider>
);

export const Playground = Template.bind({});
