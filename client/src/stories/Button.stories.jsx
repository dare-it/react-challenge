import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  argTypes: {
    label: 'Button',
    buttonVariant: {
      control: {
        type: 'radio',
        default: 'primaryContained',
      },
      options: [
        'primaryOutlined',
        'primaryContained',
        'errorOutlined',
        'errorContained',
        'successOutlined',
        'successConained',
        'warningOutlined',
        'warningContained',
      ],
      mapping: {
        primaryOutlined: {
          bgcolor: 'primary.outlinedMain',
          color: 'primary.outlinedTextMain',
          border: '0',
          ':hover': {
            bgcolor: 'primary.outlinedHover',
            color: 'primary.outlinedTextSecondary',
            border: '0',
          },
          ':active': {
            bgcolor: 'primary.outlinedHover',
            color: 'primary.outlinedTextSecondary',
            border: '0',
          },
        },
        primaryContained: {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          border: '0',
          ':hover': {
            bgcolor: 'primary.dark',
          },
          ':active': {
            bgcolor: 'primary.dark',
          },
        },
        errorOutlined: {
          bgcolor: '#fff',
          color: 'error.border',
          border: '1',
          borderColor: 'error.border',
          ':hover': {
            bgcolor: 'error.hover',
            borderColor: 'error.border',
            border: '1',
          },
          ':active': {
            bgcolor: 'error.hover',
            borderColor: 'error.border',
            border: '1',
          },
        },
        errorContained: {
          bgcolor: 'error.main',
          color: 'error.contrastText',
          border: '0',
          ':hover': {
            bgcolor: 'error.dark',
            color: '#fff',
          },
          ':active': {
            bgcolor: 'error.main',
            color: 'error.contrastText',
          },
        },
        successOutlined: {
          bgcolor: '#fff',
          color: 'success.hoverText',
          border: '1',
          borderColor: '#66BB6A',
          ':hover': {
            bgcolor: 'success.main',
            border: '1',
            borderColor: 'success.border',
            color: 'success.hoverText',
          },
          ':active': {
            bgcolor: 'success.main',
            border: '1',
            borderColor: 'success.border',
            color: 'success.hoverText',
          },
        },
        successConained: {
          bgcolor: 'success.main',
          color: 'success.contrastText',
          border: '0',
          ':hover': {
            bgcolor: 'success.dark',
            color: '#fff',
          },
          ':active': {
            bgcolor: 'success.main',
            color: 'success.contrastText',
          },
        },
        warningOutlined: {
          bgcolor: 'warning.outlinedMain',
          color: 'warning.outlinedTextMain',
          borderColor: 'warning.border',
          border: '1',
          ':hover': {
            color: 'warning.outlinedTextSecondary',
            bgcolor: 'warning.outlinedHover',
            borderColor: 'warning.border',
            border: '1',
          },
          ':active': {
            color: 'warning.outlinedTextSecondary',
            bgcolor: 'warning.outlinedHover',
            borderColor: 'warning.border',
            border: '1',
          },
        },
        warningContained: {
          bgcolor: 'warning.main',
          color: 'warning.contrastText',
          border: '0',
          ':hover': {
            bgcolor: 'warning.dark',
            color: '#fff',
          },
          ':active': {
            bgcolor: 'warning.main',
            color: 'warning.contrastText',
          },
        },
      },
    },

    onClick: {
      action: 'handleClick',
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['large', 'medium', 'small'],
    },
    disabled: {
      control: {
        default: false,
        type: 'boolean',
      },
    },

    startIcon: {
      control: {
        type: 'radio',
        default: '',
      },
      options: ['addIcon', 'nextIcon', 'none'],
      mapping: {
        addIcon: <AddIcon />,
        nextIcon: <ArrowForwardIosIcon />,
        none: '',
      },
    },
    endIcon: {
      control: {
        type: 'radio',
        default: '',
      },
      options: ['addIcon', 'nextIcon', 'none'],
      mapping: {
        addIcon: <AddIcon />,
        nextIcon: <ArrowForwardIosIcon />,
        none: '',
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'}>
        Button
      </Button>
      <Button variant={'contained'} color={'error'}>
        Button
      </Button>
      <Button variant={'contained'} color={'success'}>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'}>
        Button
      </Button>
    </Grid>
    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
      <Button variant={'outlined'} color={'primary'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'error'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'success'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'}>
        Button
      </Button>
    </Grid>
    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Error</Typography>
      </Grid>
      <Button variant={'outlined'} color={'primary'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'error'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'success'}>
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'}>
        Button
      </Button>
    </Grid>
  </>
);

export const ButtonPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonPrimary.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
