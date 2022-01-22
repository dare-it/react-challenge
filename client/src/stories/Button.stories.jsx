import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';

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
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'}>
        + Button
      </Button>
      <Button variant={'contained'} color={'error'}>
        + Button
      </Button>
      <Button variant={'contained'} color={'success'}>
        + Button
      </Button>
      <Button variant={'contained'} color={'warning'}>
        + Button
      </Button>
    </Grid>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'}>
        Button {'>'}
      </Button>
      <Button variant={'contained'} color={'error'}>
        Button {'>'}
      </Button>
      <Button variant={'contained'} color={'success'}>
        Button {'>'}
      </Button>
      <Button variant={'contained'} color={'warning'}>
        Button {'>'}
      </Button>
    </Grid>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'}>
      {'>'}
      </Button>
      <Button variant={'contained'} color={'error'}>
      {'>'}
      </Button>
      <Button variant={'contained'} color={'success'}>
      {'>'}
      </Button>
      <Button variant={'contained'} color={'warning'}>
      {'>'}
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
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'} disabled>
        Prim cont
      </Button>
      <Button variant={'outlined'} color={'primary'} disabled>
        Prim out
      </Button>
      <Button variant={'contained'} color={'error'} disabled>
        Err cont
      </Button>
      <Button variant={'outlined'} color={'error'} disabled>
        Err out
      </Button>
      <Button variant={'contained'} color={'warning'} disabled>
        War cont
      </Button>
      <Button variant={'outlined'} color={'warning'} disabled>
        War out
      </Button>
      <Button variant={'contained'} color={'success'} disabled>
        Suc cont
      </Button>
      <Button variant={'outlined'} color={'success'} disabled>
        Suc out
      </Button>
    </Grid>
  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
