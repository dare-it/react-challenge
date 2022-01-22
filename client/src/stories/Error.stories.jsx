import React from 'react';

import { Error } from '../ui';

export default {
  title: 'Zadanie 1/Error',
  component: Error,
  description: 'Unexpected error',

  argTypes: {
    verticalAlign: {control: {
      type: 'radio',
    },
    options: ['center'],
  },
}
};

const Template = ({ label, ...args }) => <Error {...args}>{label}</Error>;

export const Playground = Template.bind({});
Playground.args = {
  label: 'Error',
}
