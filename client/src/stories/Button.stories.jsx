import React from 'react';
import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args}>{label}</Button>;
const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Primary</Typography>
      </Grid>
      <Button variant={'contained'} color={'primary'} size={'large'}>
        Button
      </Button>
      <Button variant={'contained'} color={'primary'} size={'large'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'primary'} size={'large'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'primary'} size={'medium'}>
      <ArrowForwardIosIcon fontSize={'15px'}/>
      </Button>
      <Button variant={'outlined'} color={'primary'}>
        Button
      </Button>
      <Button variant={'contained'} color={'primary'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'primary'} disabled>
        Button
      </Button>
    </Grid>

    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
      <Typography variant={'subheading'}>Error</Typography>
      </Grid>
      <Button variant={'contained'} color={'error'} size={'large'}>
        Button
      </Button>
      <Button variant={'contained'} color={'error'} size={'large'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'error'} size={'large'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'error'} size={'medium'}>
      <ArrowForwardIosIcon fontSize={'15px'}/>
      </Button>
      <Button variant={'outlined'} color={'error'}>
        Button
      </Button>
      <Button variant={'contained'} color={'error'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'error'} disabled>
        Button
      </Button>
    </Grid>

    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Success</Typography>
      </Grid>
      <Button variant={'contained'} color={'success'} size={'large'}>
        Button
      </Button>
      <Button variant={'contained'} color={'success'} size={'large'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'success'} size={'large'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'success'} size={'medium'}>
      <ArrowForwardIosIcon fontSize={'15px'}/>
      </Button>
      <Button variant={'outlined'} color={'success'}>
        Button
      </Button>
      <Button variant={'contained'} color={'success'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'success'} disabled>
        Button
      </Button>
    </Grid>

    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Warning</Typography>
      </Grid>
      <Button variant={'contained'} color={'warning'} size={'large'}>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'} size={'large'} startIcon={<AddIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'} size={'large'} endIcon={<ArrowForwardIosIcon/>}>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'} size={'medium'}>
      <ArrowForwardIosIcon fontSize={'15px'}/>
      </Button>
      <Button variant={'outlined'} color={'warning'}>
        Button
      </Button>
      <Button variant={'contained'} color={'warning'} disabled>
        Button
      </Button>
      <Button variant={'outlined'} color={'warning'} disabled>
        Button
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
