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
      main: '#66bb6a',
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
    grey: {
      lev1: 'rgba(51, 51, 51, 0.07)',
      lev3: 'rgba(51, 51, 51, 0.25)',
      lev4: 'rgba(51, 51, 51, 0.5)',
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
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          display: 'none',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: '12px',
          height: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'capitalize',
          minHeight: '22.7px',
          minWidth: '22.7px',
          padding: '6px 12px',
          fontWeight: '500',
          backgroundColor: theme.palette.secondary.main,
          '&.Mui-disabled': {
            backgroundColor: theme.palette.grey.lev1,
            color: theme.palette.grey.lev3,
          },
          ':hover': {
            boxShadow: 'none',
          },
          ':active': {
            boxShadow: 'none',
          },
        },
        endIcon: {
          marginLeft: '4px',
          marginRight: '0',
        },
        startIcon: {
          marginRight: '4px',
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          ':active': {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          ':hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          ':hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          ':hover': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
        },
        outlinedPrimary: {
          border: 'none',
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          ':hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
          ':active': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.grey.lev1,
            color: theme.palette.grey.lev3,
            border: 'none',
          },
        },
        outlinedError: {
          backgroundColor: theme.palette.error.contrastText,
          ':hover': {
            backgroundColor: theme.palette.error.light,
          },
          ':active': {
            backgroundColor: theme.palette.error.light,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.error.contrastText,
            color: theme.palette.grey.lev3,
            borderColor: theme.palette.grey.lev1,
          },
        },
        outlinedSuccess: {
          border: '1px solid theme.palette.success.main',
          backgroundColor: theme.palette.success.contrastText,
          color: theme.palette.success.dark,
          ':hover': {
            backgroundColor: theme.palette.success.light,
          },
          ':active': {
            backgroundColor: theme.palette.success.light,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.success.contrastText,
            color: theme.palette.grey.lev3,
            borderColor: theme.palette.grey.lev1,
          },
        },
        outlinedWarning: {
          backgroundColor: theme.palette.warning.contrastText,
          ':hover': {
            backgroundColor: theme.palette.warning.light,
          },
          ':active': {
            backgroundColor: theme.palette.warning.light,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.warning.contrastText,
            color: theme.palette.grey.lev3,
            borderColor: theme.palette.grey.lev1,
          },
        },
      },
    },
  },
});

export { theme };
