import AddRoundedIcon from '@mui/icons-material/AddRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { Button } from 'ui';
import { capitalizeFirstLetter } from 'utils';

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
    endIcon: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    text: {
      table: {
        disable: true,
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => <Button {...args} text={label} />;

// TODO: explore problem with fast click and color transition
// eslint-disable-next-line no-alert
const buttonAction = () => alert(`You've clicked, bravo!`);

const generateButtons = (
  color = 'primary',
  variant = 'contained',
  disabled = false,
) => {
  const disabledText = disabled ? 'Disabled' : '';
  const colorText = capitalizeFirstLetter(color);
  const variantText = capitalizeFirstLetter(variant);
  const groupTitle = `${colorText} ${variantText} ${disabledText}`;
  return (
    <Grid item xs={12} md={6} sx={{ mb: 3 }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant={'subheading'}>{groupTitle}</Typography>
      </Box>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={'flex-start'}
      >
        <Button
          variant={variant}
          color={color}
          disabled={disabled}
          text={'Button'}
        />
        <Button
          variant={variant}
          color={color}
          disabled={disabled}
          startIcon={<AddRoundedIcon />}
          text={'Button'}
        />
        <Button
          variant={variant}
          color={color}
          disabled={disabled}
          endIcon={<KeyboardArrowRightRoundedIcon />}
          text={'Click me'}
          onClick={buttonAction}
        />
        <Button
          variant={variant}
          color={color}
          disabled={disabled}
          endIcon={<KeyboardArrowRightRoundedIcon />}
        />
      </Stack>
    </Grid>
  );
};

const All = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider>Primary</Divider>
      </Grid>
      {generateButtons('primary', 'contained')}
      {generateButtons('primary', 'outlined')}
      {generateButtons('primary', 'contained', true)}
      {generateButtons('primary', 'outlined', true)}
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider>Error</Divider>
      </Grid>
      {generateButtons('error', 'contained')}
      {generateButtons('error', 'outlined')}
      {generateButtons('error', 'contained', true)}
      {generateButtons('error', 'outlined', true)}
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider>Success</Divider>
      </Grid>
      {generateButtons('success', 'contained')}
      {generateButtons('success', 'outlined')}
      {generateButtons('success', 'contained', true)}
      {generateButtons('success', 'outlined', true)}
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider>Warning</Divider>
      </Grid>
      {generateButtons('warning', 'contained')}
      {generateButtons('warning', 'outlined')}
      {generateButtons('warning', 'contained', true)}
      {generateButtons('warning', 'outlined', true)}
    </Grid>
  </>
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: 'Button',
};

export const AllStories = All.bind({});
