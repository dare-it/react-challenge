import { createTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
    },
    type: 'light',
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
      contrastText: '#fff',
    },
    success: {
      main: '#00A980',
      light: '#DBEBDB',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFA726',
      light: '#FFF5D2',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.25rem',
      letterSpacing: '-0.1rem',
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
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: '"Inter"',
          fontWeight: 500,
          textTransform: 'none',
          minWidth: '34px',
          '&.Mui-disabled': {
            backgroundColor: alpha('#333', 0.07),
            color: alpha('#333', 0.25),
            border: 'none',
          },
          ...(!ownerState.children && {
            padding: '10px',
          }),
          ...(ownerState.color !== 'primary' &&
            ownerState.variant === 'outlined' && {
              '&.Mui-disabled': {
                border: `1px solid ${alpha('#333', 0.07)}`,
                color: alpha('#333', 0.25),
              },
            }),
        }),
        contained: ({ ownerState, theme }) => ({
          ...(ownerState.color !== 'primary' && {
            backgroundColor: theme.palette[ownerState.color].light,
            color: theme.palette[ownerState.color].main,
            '&:hover': {
              backgroundColor: theme.palette[ownerState.color].main,
              color: theme.palette[ownerState.color].contrastText,
            },
            '&:active': {
              backgroundColor: theme.palette[ownerState.color].light,
              color: theme.palette[ownerState.color].main,
            },
          }),
          ...(ownerState.color === 'warning' && {
            backgroundColor: theme.palette.warning.light,
            color: '#B28C09',
            '&:active': {
              backgroundColor: theme.palette.warning.light,
              color: '#B28C09',
            },
          }),
        }),
        containedPrimary: {
          '&:hover': {
            color: theme.palette.secondary.main,
          },
        },
        outlined: ({ ownerState, theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette[ownerState.color].light,
            color: theme.palette[ownerState.color].main,
          },
        }),
        outlinedPrimary: {
          backgroundColor: theme.palette.secondary.main,
          border: 'none',
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
        },
        startIcon: ({ ownerState }) => ({
          ...(!ownerState.children && {
            marginRight: 0,
            marginLeft: 0,
          }),
        }),
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
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  },
});

export { theme };
