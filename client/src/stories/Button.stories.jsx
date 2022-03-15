import React from 'react';

import { Button } from '../ui';
import { Box, Grid, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Zadanie 1/Button',
  component: Button,
  description: 'ahaha',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      action: 'clicked'
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
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

const Template = ({ children, label, ...args }) => {
  return (
    <Button {...args}>
      {label && <Box component="span">{label}</Box>}
      {children}
    </Button>
  )
};

const All = () => (
  <>
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button label="Button" variant={'contained'} color={'primary'} />
      <Button label="Button" variant={'contained'} color={'error'} />
      <Button label="Button" variant={'contained'} color={'success'} />
      <Button label="Button" variant={'contained'} color={'warning'} />
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained Disabled</Typography>
      </Grid>
      <Button label="Button" variant={'contained'} color={'primary'} disabled />
      <Button label="Button" variant={'contained'} color={'error'} disabled />
      <Button label="Button" variant={'contained'} color={'success'} disabled />
      <Button label="Button" variant={'contained'} color={'warning'} disabled />
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
      <Button label="Button" variant={'outlined'} color={'primary'} />
      <Button label="Button" variant={'outlined'} color={'error'} />
      <Button label="Button" variant={'outlined'} color={'success'} />
      <Button label="Button" variant={'outlined'} color={'warning'} />
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined Disabled</Typography>
      </Grid>
      <Button label="Button" variant={'outlined'} color={'primary'} disabled />
      <Button label="Button" variant={'outlined'} color={'error'} disabled />
      <Button label="Button" variant={'outlined'} color={'success'} disabled />
      <Button label="Button" variant={'outlined'} color={'warning'} disabled />
    </Grid>

    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Icons</Typography>
      </Grid>
      <Button label="Button" variant={'outlined'} color={'primary'} />
      <Button label="Button" startIcon={<AddRoundedIcon/>}variant={'outlined'} color={'error'} />
      <Button label="Button" endIcon={<ChevronRightRoundedIcon/>} variant={'outlined'} color={'success'} />
      <Button endIcon={<ChevronRightRoundedIcon/>} variant={'outlined'} color={'warning'} />
    </Grid>
  </>
);

export const AllStories = All.bind({});

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
  disabled: false,
};