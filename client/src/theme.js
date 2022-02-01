import { createTheme } from '@mui/material';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#333',
      errorMessage: 'rgba(51, 51, 51, 0.5)',
      disabled: '#33333340',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#e6f0fd',
      disabled: '#33333312',
      contrastText: '#fff',
      hoverText: '#E8EAF6',
      activeText: '#E8EAF6',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      light: '#e6f0fd',
      disabled: '#33333312',
      contrastText: '#334ACC',
      hoverText: '#223289',
    },
    error: {
      main: '#FCECE6',
      dark: '#FF5D5D',
      disabled: '#33333312',
      contrastText: '#FF5D5D',
      hoverText: '#fff',
      outlined: {
        main: '#fff',
        dark: '#FDE8E0',
      },
    },
    success: {
      main: '#DBEBDB',
      dark: '#00A980',
      disabled: '#33333312',
      contrastText: '#00A980',
      hoverText: '#fff',
      outlined: {
        main: '#fff',
        dark: '#DBEBDB',
      },
    },
    warning: {
      main: '#FFF5D2',
      dark: '#FFA726',
      disabled: '#33333312',
      contrastText: '#B28C09',
      hoverText: '#fff',
      outlined: {
        main: 'fff',
        dark: '#FFF5D2',
      },
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: `"Inter", sans-serif`,
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
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontWeight: '600',
          padding: '6px 12px',
          textTransform: 'capitalize',
          '&:hover,&:active': {
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
          },
          '&.MuiButton-outlined': {
            borderSize: '1px',
            borderStyle: 'solid',
          },
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover,&:active': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.hoverText,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.disabled,
          },
        },
        outlinedPrimary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          border: '0',
          '&:hover,&:active': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.secondary.hoverText,
            border: '0',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.disabled,
            border: '0',
          },
        },
        containedError: {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.error.contrastText,
          '&:hover,&:active': {
            backgroundColor: theme.palette.error.dark,
            color: theme.palette.error.hoverText,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.error.disabled,
          },
        },
        outlinedError: {
          backgroundColor: theme.palette.error.outlined.main,
          borderColor: theme.palette.error.dark,
          color: theme.palette.error.contrastText,
          '&:hover,&:active': {
            backgroundColor: theme.palette.error.outlined.dark,
            borderColor: 'inherit',
            color: theme.palette.error.contrastText,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.error.outlined.main,
            borderColor: theme.palette.error.disabled,
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.main,
          color: theme.palette.success.contrastText,
          '&:hover,&:active': {
            backgroundColor: theme.palette.success.dark,
            color: theme.palette.success.hoverText,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.success.disabled,
          },
        },
        outlinedSuccess: {
          backgroundColor: theme.palette.success.outlined.main,
          borderColor: theme.palette.success.outlined.dark,
          color: theme.palette.success.contrastText,
          '&:hover,&:active': {
            backgroundColor: theme.palette.success.outlined.dark,
            borderColor: 'inherit',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.success.outlined.main,
            borderColor: theme.palette.success.disabled,
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.main,
          color: theme.palette.warning.contrastText,
          '&:hover,&:active': {
            backgroundColor: theme.palette.warning.dark,
            color: theme.palette.warning.hoverText,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.warning.disabled,
          },
        },
        outlinedWarning: {
          backgroundColor: theme.palette.warning.outlined.main,
          borderColor: theme.palette.warning.dark,
          color: theme.palette.warning.dark,
          '&:hover,&:active': {
            backgroundColor: theme.palette.warning.outlined.dark,
            borderColor: 'inherit',
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.warning.outlined.main,
            borderColor: theme.palette.warning.disabled,
          },
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
