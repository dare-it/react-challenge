import React from 'react';

import { Button } from '../ui';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

const handleClick = () => alert('Button clicked');
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const generateButtons = (color) => (
  <>
    <Grid container justifyContent="space-evenly" sx={{ mb: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Contained</Typography>
      </Grid>
      <Button
        color={color}
        variant={'contained'}
        text="Button"
        onClick={handleClick}
      />
      <Button
        color={color}
        variant={'contained'}
        text="Add item"
        startIcon={<AddIcon />}
        onClick={handleClick}
      />
      <Button
        color={color}
        variant={'contained'}
        text="Next item"
        endIcon={<ChevronRightIcon />}
        onClick={handleClick}
      />
      <Button
        color={color}
        variant={'contained'}
        centerIcon={<ChevronRightIcon />}
        onClick={handleClick}
      />
    </Grid>
    <Grid container justifyContent="space-evenly" sx={{ mb: 5 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Outlined</Typography>
      </Grid>
      <Button
        color={color}
        variant={'outlined'}
        text="Button"
        onClick={handleClick}
      />
      <Button
        color={color}
        variant={'outlined'}
        text="Add item"
        startIcon={<AddIcon />}
        onClick={handleClick}
      />
      <Button
        color={color}
        variant={'outlined'}
        text="Next item"
        endIcon={<ChevronRightIcon />}
        onClick={handleClick}
      />
      <Button
        color={color}
        variant={'outlined'}
        centerIcon={<ChevronRightIcon />}
        onClick={handleClick}
      />
    </Grid>
    <Grid container justifyContent="space-evenly" sx={{ mb: 3 }}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant={'subheading'}>Disabled</Typography>
      </Grid>
      <Button
        color={color}
        variant={'contained'}
        text="Button"
        onClick={handleClick}
        disabled
      />
      <Button
        color={color}
        variant={'contained'}
        text="Add item"
        startIcon={<AddIcon />}
        onClick={handleClick}
        disabled
      />
      <Button
        color={color}
        variant={'contained'}
        text="Next item"
        endIcon={<ChevronRightIcon />}
        onClick={handleClick}
        disabled
      />
      <Button
        color={color}
        variant={'contained'}
        centerIcon={<ChevronRightIcon />}
        onClick={handleClick}
        disabled
      />
    </Grid>
    <Grid container justifyContent="space-evenly">
      <Button
        color={color}
        variant={'outlined'}
        text="Button"
        onClick={handleClick}
        disabled
      />
      <Button
        color={color}
        variant={'outlined'}
        text="Add item"
        startIcon={<AddIcon />}
        onClick={handleClick}
        disabled
      />
      <Button
        color={color}
        variant={'outlined'}
        text="Next item"
        endIcon={<ChevronRightIcon />}
        onClick={handleClick}
        disabled
      />
      <Button
        color={color}
        variant={'outlined'}
        centerIcon={<ChevronRightIcon />}
        onClick={handleClick}
        disabled
      />
    </Grid>
  </>
);

const PrimaryButtons = () => generateButtons('primary');
const ErrorButtons = () => generateButtons('error');
const SuccessButtons = () => generateButtons('success');
const WarningButtons = () => generateButtons('warning');

export const PrimaryButton = PrimaryButtons.bind({});
export const ErrorButton =  ErrorButtons.bind({});
export const SuccessButton =  SuccessButtons.bind({});
export const WarningButton = WarningButtons.bind({});