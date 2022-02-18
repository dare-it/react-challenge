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
      secondary: '#FDE8E0',
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
      contrastText: '#fff',
    },
    background: {
      default: '#F8F8F8',
      blue: '#37C4D7',
    },
    greys: {
      level1: 'rgba(51, 51, 51, 0.07)',
      level2: '',
      level3: 'rgba(51, 51, 51, 0.25)',
      level4: 'rgba(51, 51, 51, 0.5)',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Inter',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
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
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Inter',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
          ].join(','),
          fontSize: '0.9375rem',
          textTransform: 'capitalize',
          lineHeight: '1.375rem',
          height: '38px',
          maxWidth: 'max-content',
        },
      },
      variants: [
        {
          props: { size: 'medium' },
          style: {
            padding: '8px 12px',
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            '&, &:hover, &:active': {
              boxShadow: 'none',
            },

            '&:disabled': {
              color: theme.palette.greys.level3,
              backgroundColor: theme.palette.greys.level1,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,

            '&:hover, &:active': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.secondary.light,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            '&, &:active': {
              color: theme.palette.error.main,
              backgroundColor: theme.palette.error.light,
            },

            '&:hover': {
              backgroundColor: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'success' },
          style: {
            '&, &:active': {
              color: theme.palette.success.dark,
              backgroundColor: theme.palette.success.light,
            },

            '&:hover': {
              backgroundColor: theme.palette.success.dark,
              color: theme.palette.success.contrastText,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'warning' },
          style: {
            '&, &:active': {
              color: theme.palette.warning.dark,
              backgroundColor: theme.palette.warning.light,
            },

            '&:hover': {
              color: theme.palette.warning.contrastText,
              backgroundColor: theme.palette.warning.main,
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            '&:disabled': {
              color: theme.palette.greys.level3,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            border: 'none',

            '&:hover, &:active': {
              backgroundColor: theme.palette.secondary.dark,
              border: 'none',
              color: theme.palette.primary.dark,
            },

            '&:disabled': {
              backgroundColor: theme.palette.greys.level1,
              border: 'none',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'error' },
          style: {
            borderColor: theme.palette.error.main,
            color: theme.palette.error.main,

            '&:hover, &:active': {
              backgroundColor: theme.palette.error.secondary,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'success' },
          style: {
            color: theme.palette.success.dark,
            borderColor: theme.palette.success.main,

            '&:hover, &:active': {
              backgroundColor: theme.palette.success.light,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'warning' },
          style: {
            color: theme.palette.warning.main,
            borderColor: theme.palette.warning.main,

            '&:hover, &:active': {
              backgroundColor: theme.palette.warning.light,
            },
          },
        },
      ],
    },
  },
});

export { theme };
