import { createTheme } from '@mui/material';

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  palette: {
    text: {
      primary: '#000',
    },
    type: 'light',
    primary: {
      main: '#334ACC',
      dark: '#223289',
      contrastText: '#fff',
      outlinedMain: '#E8EAF6',
      outlinedHover: '#C5CAE9',
      outlinedTextMain: '#334ACC',
      outlinedTextSecondary: '#223289',
    },
    secondary: {
      main: '#E8EAF6',
      dark: '#C5CAE9',
      contrastText: '#fff',
    },
    error: {
      main: '#FCECE6',
      dark: '#FF5D5D',
      contrastText: '#FF5D5D',
      border: '#FF5D5D',
      hover: '#FDE8E0',
    },
    success: {
      dark: '#00A980',
      main: '#DBEBDB',
      contrastText: '#00A980',
      border: '#66BB6A',
      hoverText: '#00A980',
    },
    warning: {
      dark: '#FFA726',
      main: '#FFF5D2',
      contrastText: '#B28C09',
      border: '#FFA726',
      hoverText: '#00A980',
      outlinedMain: '#fff',
      outlinedHover: '#FFF5D2',
      outlinedTextMain: '#FFA726',
      outlinedTextSecondary: '#FFA726',
    },
    background: {
      default: '#F8F8F8',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 15,
    fontWeightLight: 300,
    h1: {
      color: '#000',
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
          minWidth: '34px',
          minHeight: '34px',
          textTransform: 'none',
          padding: '8px 12px',
          outline: 'none',
          border: '1px solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiButton-startIcon': {
            margin: 0,
          },
          '& .MuiButton-endIcon': {
            margin: 0,
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
          borderRadius: 0,
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
