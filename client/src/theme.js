import { createTheme } from '@mui/material';
import '@fontsource/inter';

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
    grays: {
      l1: 'rgba(51, 51, 51, 0.07)',
      l3: 'rgba(51, 51, 51, 0.25)',
      l4: 'rgba(51, 51, 51, 0.5)',
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
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 12px',
          fontFamily: `'Inter'`,
          fontWeight: 500,
          fontSize: '15px',
          textTransform: 'capitalize',
          border: 'none',
          boxShadow: 'none',
          '&:hover': {
            border: 'transparent',
            boxShadow: 'none',
          },
          '&:disabled': {
            backgroundColor: theme.palette.grays.l1,
            color: theme.palette.grays.l3,
            border: 'none',
            padding: '6px 16px',
          },
        },
        outlinedPrimary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
            boxShadow: 'none',
          },
          '&:disabled': {
            backgroundColor: theme.palette.grays.l1,
            border: 'none',
          },
        },
        containedError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            boxShadow: 'none',
          },
        },
        outlinedError: {
          backgroundColor: 'transparent',
          color: theme.palette.error.main,
          border: `1px solid ${theme.palette.error.main}`,
          '&:hover': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
            border: `1px solid ${theme.palette.error.main}`,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.grays.l1}`,
          },
        },
        containedSuccess: {
          fontWeight: 600,
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
          },
        },
        outlinedSuccess: {
          fontWeight: 600,
          backgroundColor: 'transparent',
          color: theme.palette.success.main,
          border: `1px solid ${theme.palette.success.main}`,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
            border: `1px solid ${theme.palette.success.main}`,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.grays.l1}`,
          },
        },
        containedWarning: {
          fontWeight: 600,
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          '&:hover': {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
          },
        },
        outlinedWarning: {
          fontWeight: 600,
          backgroundColor: 'transparent',
          color: theme.palette.warning.main,
          border: `1px solid ${theme.palette.warning.main}`,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
            border: `1px solid ${theme.palette.warning.main}`,
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.grays.l1}`,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.grays.l4,
        },
      },
    },
  },
});

export { theme };
