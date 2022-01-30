import { createTheme } from '@mui/material';

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
      dark: '#B28C09',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
    greys: {
      main: '#33333340',
      light: '#33333312',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontFamily: 'Inter, sans-serif',
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

  //Added buttons in the theme
  components: {

    // Disable the ripple in the button
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    //Styling in the buttons
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '500',
          fontFamily: 'Inter, sans-serif',
          boxShadow: 'none',
          padding: '8px 12px',
          minWidth: '40px',
          minHeight: '40px',
          lineHeight: '22px',
          ':hover': {
            boxShadow: 'none',
          },
          ':active': {
            boxShadow: 'none',
          },
        },
        outlined: {
          border: theme.palette.main,
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          ':hover': {
            backgroundColor: theme.palette.primary.dark,
            border: 'none',
            color: theme.palette.primary.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.primary.dark,
            border: 'none',
            color: theme.palette.primary.contrastText,
          },
          ':disabled': {
            backgroundColor: theme.palette.greys.light,
            color: theme.palette.greys.main,
          },
        },
        outlinedPrimary: {
          border: 'none',
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.primary.main,
          ':hover': {
            backgroundColor: theme.palette.secondary.dark,
            border: 'none',
            color: theme.palette.primary.dark,
          },
          ':active:': {
            backgroundColor: theme.palette.secondary.dark,
            border: 'none',
            color: theme.palette.primary.dark,
          },
          ':disabled': {
            backgroundColor: theme.palette.greys.light,
            color: theme.palette.greys.main,
            border: 'none',
          },
        },
        containedError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          ':hover': {
            backgroundColor: theme.palette.error.main,
            border: 'none',
            color: theme.palette.error.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
            border: 'none',
          },
          ':disabled': {
            backgroundColor: theme.palette.greys.light,
            color: theme.palette.greys.main,
            border: 'none',
          },
        },
        outlinedError: {
          backgroundColor: 'transparent',
          color: theme.palette.error.main,

          ':hover': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
          ':active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
          ':disabled': {
            backgroundColor: 'transparent',
            color: theme.palette.greys.main,
            border: '1px solid {theme.palette.greys.main}',
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          fontWeight: '600',
          ':hover': {
            backgroundColor: theme.palette.success.main,
            border: 'none',
            color: theme.palette.success.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
            border: 'none',
          },
          ':disabled': {
            backgroundColor: theme.palette.greys.light,
            color: theme.palette.greys.main,
            border: 'none',
          },
        },
        outlinedSuccess: {
          backgroundColor: 'transparent',
          color: theme.palette.success.main,
          fontWeight: '600',
          ':hover': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
          ':active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
          ':disabled': {
            backgroundColor: 'transparent',
            color: theme.palette.greys.main,
            border: '1px solid {theme.palette.greys.main}',
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          fontWeight: '600',
          ':hover': {
            backgroundColor: theme.palette.warning.main,
            border: 'none',
            color: theme.palette.warning.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
            border: 'none',
          },
          ':disabled': {
            backgroundColor: theme.palette.greys.light,
            color: theme.palette.greys.main,
            border: 'none',
          },
        },
        outlinedWarning: {
          backgroundColor: 'transparent',
          color: theme.palette.warning.main,
          fontWeight: '600',
          ':hover': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
          },
          ':active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
          },
          ':disabled': {
            backgroundColor: 'transparent',
            color: theme.palette.greys.main,
            border: '1px solid {theme.palette.greys.main}',
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
