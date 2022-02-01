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
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontBase: 'Inter',
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          textTransform: 'none',
          borderRadius: '4px',
          boxShadow: 'none',
          ':hover, :active': {
            boxShadow: 'none',
          },
        },
        /* Styles applied to the root element if `size="small"`or "medium" or "large" and `variant="contained"`. */
        containedSizeSmall: {
          padding: '6px 11px',
          fontSize: theme.typography.pxToRem(15),
        },
        containedSizeMedium: {
          padding: '6px 11pxpx',
          fontSize: theme.typography.pxToRem(15),
        },
        containedSizeLarge: {
          padding: '6px 11pxpx',
          fontSize: theme.typography.pxToRem(15),
        },
        /* Styles applied to the root element if `size="small"`, "medium" or "large" and `variant="outlined"`. */
        outlinedSizeSmall: {
          padding: '5px 10px',
          fontSize: theme.typography.pxToRem(15),
        },
        outlinedSizeMedium: {
          padding: '5px 10px',
          fontSize: theme.typography.pxToRem(15),
        },
        outlinedSizeLarge: {
          padding: '5px 10px',
          fontSize: theme.typography.pxToRem(15),
        },

        iconSizeMedium: {
          '& > *:first-child': {
            fontSize: 10,
          },
        },
        /* Styles applied to the icon element if supplied and `size="large"`. */
        // iconSizeLarge: {
        //   '& > *:first-child': {
        //     fontSize: 10,
        //   },
        // },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontWeight: 500,

          ':hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
          },
          ':active': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.main,
          },
          '&.Mui-disabled': {
            color: 'rgba(51,51, 51, 0.25)',
            backgroundColor: 'rgba(51,51, 51, 0.07)',
          },
        },
        outlinedPrimary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          border: 'none',
          fontWeight: 500,
          ':hover, :active': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            border: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(51,51, 51, 0.07)',
            color: 'rgba(51,51, 51, 0.25)',
          },
        },
        containedError: {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.main,
          fontWeight: 500,
          ':hover': {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
          },
          ':active': {
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.main,
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(51,51, 51, 0.07)',
            color: 'rgba(51,51, 51, 0.25)',
            border: 'none',
          },
        },
        outlinedError: {
          color: theme.palette.error.main,
          fontWeight: 500,
          ':hover, :active': {
            backgroundColor: '#FDE8E0',
            color: theme.palette.error.main,
          },
          '&.Mui-disabled': {
            color: 'rgba(51,51, 51, 0.25)',
            border: '1px solid rgba(51,51, 51, 0.07)',
          },
        },
        containedSuccess: {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.main,
          fontWeight: 600, //font weight changes in Figma
          ':hover': {
            backgroundColor: theme.palette.success.main,
            color: '#fff',
          },
          ':active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(51,51, 51, 0.07)',
            color: 'rgba(51,51, 51, 0.25)',
            textTransform: 'none',
          },
        },
        outlinedSuccess: {
          backgroundColor: 'transparent',
          color: theme.palette.success.main,
          fontWeight: 600,
          ':hover': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
          ':active': {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
          },
          '&.Mui-disabled': {
            color: 'rgba(51,51, 51, 0.25)',
            border: '1px solid rgba(51,51, 51, 0.07)',
          },
        },
        containedWarning: {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.dark,
          fontWeight: 600,
          ':hover': {
            backgroundColor: theme.palette.warning.main,
            color: '#fff',
          },
          ':active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.dark,
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(51,51, 51, 0.07)',
            color: 'rgba(51,51, 51, 0.25)',
            border: 'none',
          },
        },
        outlinedWarning: {
          backgroundColor: 'transparent',
          color: theme.palette.warning.main,
          fontWeight: 600,
          ':hover': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
          },
          ':active': {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
          },
          '&.Mui-disabled': {
            color: 'rgba(51,51, 51, 0.25)',
            border: '1px solid rgba(51,51, 51, 0.07)',
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
