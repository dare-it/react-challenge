import { createTheme } from '@mui/material';

let theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    button: {
      fontSize: '15px',
      fontWeight: '500',
      textTransform: 'none',
    },
  },
  shadows: 'none',
  shape: {
    borderRadius: '4px',
  },
  palette: {
    text: {
      primary: '#FFFFFF',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      light: '#E8EAF6',
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
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

theme = createTheme(theme, {
  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          height: '34px',
          minWidth: '34px',
        },

        iconSizeLarge: {
          '& > *:first-child': {
            fontSize: 15,
          },
        },
      
        iconSizeMedium: {
          '& > *:first-child': {
            fontSize: 15,
          },
        },

        outlinedPrimary: {
          border: 0,
          background: theme.palette.primary.light,
          '&:hover': {
            background: theme.palette.secondary.dark,
            border: 0,
            color: theme.palette.primary.dark,
          },
        },

        containedError: {
          background: theme.palette.error.light,
          border: 0,
          color: theme.palette.error.main,
          '&:hover': {
            background: theme.palette.error.main,
            border: 0,
            color: theme.palette.error.contrastText,
          },
          '&:active': {
            background: theme.palette.error.light,
            border: 0,
            color: theme.palette.error.main,
          },
        },
        outlinedError: {
          '&:hover': {
            background: '#FDE8E0',
            borderColor: theme.palette.error.main,
            color: theme.palette.error.main,
          },
        },

        containedSuccess: {
          background: theme.palette.success.light,
          border: 0,
          color: theme.palette.success.dark,
          '&:hover': {
            background: theme.palette.success.dark,
            border: 0,
            color: theme.palette.success.contrastText,
          },
          '&:active': {
            background: theme.palette.success.light,
            border: 0,
            color: theme.palette.success.dark,
          },
        },
        outlinedSuccess: {
          '&:hover': {
            background: theme.palette.success.light,
            borderColor: theme.palette.success.dark,
            color: theme.palette.success.dark,
          },
        },

        containedWarning: {
          background: theme.palette.warning.light,
          border: 0,
          color: theme.palette.warning.dark,
          '&:hover': {
            background: theme.palette.warning.main,
            border: 0,
            color: theme.palette.warning.light,
          },
          '&:active': {
            background: theme.palette.warning.light,
            border: 0,
            color: theme.palette.warning.dark,
          },
        },
        outlinedWarning: {
          '&:hover': {
            background: theme.palette.warning.light,
            borderColor: theme.palette.warning.main,
            color: theme.palette.warning.main,
          },
        },
      },
    },
  },
});

export { theme };
