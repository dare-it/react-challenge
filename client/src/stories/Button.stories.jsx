import React from 'react';

import { Button } from '../ui';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  //More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'error', 'success', 'warning'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },
    startIcon: {
      control:{
        type: 'node',
      },
    },
    endIcon: {
      control:{
        type: 'node',
      },
    }
  },
};

//TEMPLATE
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;


export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const BtnBase = Template.bind({});
BtnBase.args = {
  label: 'Button',
}

export const BtnPlus = Template.bind({});
BtnPlus.args = {
  ...BtnBase.args,
  startIcon: <AddIcon/>,
}

export const BtnArrow = Template.bind({});
BtnArrow.args = {
  ...BtnBase.args,
  endIcon: <ArrowForwardIosIcon/>
}

export const BtnIcon = Template.bind({});
BtnIcon.args = {
  label: '',
  endIcon: <ArrowForwardIosIcon/>
}
