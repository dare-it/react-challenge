/* eslint-disable import/no-mutable-exports */

import { createTheme } from '@mui/material';

let theme = createTheme({
  sizing: {
    button: {
      large: {
        padding: {
          withBorder: '0.4375rem 0.6875rem',
          withoutBorder: '0.5rem 0.75rem',
        },
        onlyIcon: {
          width: '2.5rem',
          height: '2.5rem',
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
    },
    type: 'light',
    grey: {
      100: 'rgba(51, 51, 51, 0.07)',
      200: 'rgba(51, 51, 51, 0.15)',
      300: 'rgba(51, 51, 51, 0.25)',
      400: 'rgba(51, 51, 51, 0.5)',
      500: 'rgba(51, 51, 51, 0.75)',
    },
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5D5D',
      light: '#FCECE6',
      dark: '#FDE8E0',
      contrastText: '#fff',
    },
    success: {
      main: '#66BB6A',
      light: '#DBEBDB',
      dark: '#00A980',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      dark: '#B28C09',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

const defaultFont = [
  '"Inter"',
  '"Oxygen"',
  '"Ubuntu"',
  '"Cantarell"',
  '"Fira Sans"',
  '"Droid Sans"',
  '"Helvetica Neue"',
  'sans-serif',
].join(', ');

theme = createTheme(theme, {
  typography: {
    fontFamily: defaultFont,
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
      fontFamily: theme.typography.fontFamily,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.074rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.728rem',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.44rem',
    },
    h5: {
      fontSize: '1.44rem',
    },
    h6: {
      fontSize: '1.44rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontWeight: 400,
      color: theme.palette.grey['500'],
    },
    button: {
      textTransform: 'none',
      letterSpacing: 0,
    },
    caption: {
      fontSize: '1.1875rem',
      lineHeight: '1.5',
      fontWeight: '400',
      color: theme.palette.grey['400'],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: 'large',
      },
      styleOverrides: {
        sizeLarge: ({ ownerState }) => ({
          padding: theme.sizing.button.large.padding.withoutBorder,
          fontSize: '0.9375rem',
          lineHeight: 1.466,
          '& .MuiButton-startIcon': {
            marginLeft: '-2px',
            marginRight: '10px',
            '& > *:nth-of-type(1)': {
              fontSize: '1rem',
            },
          },
          '& .MuiButton-endIcon': {
            marginRight: '-2px',
            '& > *:nth-of-type(1)': {
              fontSize: '1rem',
            },
          },
          ...(ownerState.endIcon && {
            paddingLeft: '1.375rem',
          }),
          ...(ownerState.variant === 'outlined' && {
            padding: theme.sizing.button.large.padding.withBorder,
          }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              padding: theme.sizing.button.large.padding.withoutBorder,
            }),
        }),
        root: ({ ownerState }) => ({
          fontFamily: theme.typography.fontFamily,
          minWidth: '40px',
          /**
           * Disabled button styles
           */
          '&:disabled': {
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.grey[300],
            ...(ownerState.variant === 'outlined' &&
              (ownerState.color === 'error' ||
                ownerState.color === 'warning' ||
                ownerState.color === 'success') && {
                color: theme.palette.grey[300],
                border: `1px solid ${theme.palette.grey[100]}`,
                backgroundColor: 'transparent',
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' && {
                border: 'none',
              }),
          },
        }),
        containedPrimary: {
          ':active': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        outlinedPrimary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          border: 'none',
          ':hover, :active': {
            border: 'none',
          },
          ':hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
          },
        },
        containedError: {
          color: theme.palette.error.main,
          backgroundColor: theme.palette.error.light,
          ':hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
        },
        outlinedError: {
          color: theme.palette.error.main,
          border: `1px solid ${theme.palette.error.main}`,
          ':hover, :active': {
            backgroundColor: theme.palette.error.dark,
          },
        },
        containedSuccess: {
          color: theme.palette.success.dark,
          backgroundColor: theme.palette.success.light,
          fontWeight: 600,
          ':hover': {
            backgroundColor: theme.palette.success.dark,
            color: theme.palette.success.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.dark,
          },
        },
        outlinedSuccess: {
          color: theme.palette.success.dark,
          fontWeight: 600,
          border: `1px solid ${theme.palette.success.main}`,
          ':hover, :active': {
            backgroundColor: theme.palette.success.light,
          },
        },
        containedWarning: {
          fontWeight: 600,
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          ':hover': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
          },
        },
        outlinedWarning: {
          fontWeight: 600,
          border: `1px solid ${theme.palette.warning.main}`,
          ':hover, :active': {
            backgroundColor: theme.palette.warning.light,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#333',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey['500'],
          ':hover': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
          },
          '&.Mui-selected': {
            borderRadius: 0,
            backgroundColor: 'transparent',
            borderBottom: '2px solid #0666eb',
            color: theme.palette.primary.main,
          },
          '.MuiTypography-root': {
            fontWeight: '500',
            fontSize: '14px',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#33333350',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '40px 32px',
          border: 'none',
          boxShadow: theme.shadows[3],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '0',
          fontSize: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fieldset: {
            borderColor: '#E8EAF6',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fieldset: {
            borderColor: '#E8EAF6',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        sizeMedium: {
          '&.Mui-error': {
            fontSize: '0.95rem',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#F9FAFD',
          },
        },
      },
    },
  },
});

export { theme };
