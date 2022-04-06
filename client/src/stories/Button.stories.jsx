import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
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
      options: ['large', 'medium', 'small'],
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
    onClick: { action: 'clicked' },
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
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={() => {
          alert('clicked');
        }}
      >
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
    <Grid container sx={{ mt: 2 }}>
      <Button
        variant={'contained'}
        color={'primary'}
        endIcon={<ChevronRightIcon />}
      >
        Button
      </Button>
      <Button variant={'contained'} color={'primary'} startIcon={<AddIcon />}>
        Button
      </Button>
    </Grid>
    <Grid container sx={{ mt: 2 }}>
      <Button
        variant={'contained'}
        color={'primary'}
        startIcon={<ChevronRightIcon />}
      />
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
    <Grid container sx={{ mt: 2 }}>
      <Button
        variant={'outlined'}
        color={'warning'}
        endIcon={<ChevronRightIcon />}
      >
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'} startIcon={<AddIcon />}>
        Button
      </Button>
    </Grid>
    <Grid container sx={{ mt: 2 }}>
      <Button
        variant={'outlined'}
        color={'warning'}
        startIcon={<ChevronRightIcon />}
      />
    </Grid>
  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
