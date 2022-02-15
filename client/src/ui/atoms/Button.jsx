import * as React from 'react';
import { Box, Button as MuiButton, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { theme } from 'theme';
import { ThemeProvider } from '@mui/material';

let buttonTheme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minWidth: '2.375rem',
          minHeight: '2.375rem',
          padding: '0.5rem',
          borderRadius: theme.shape.borderRadius,
          ".MuiButton-startIcon, .MuiButton-endIcon": {
            margin: 0
          },
          "& .MuiBox-root": {
            margin: '0 0.25rem',
            lineHeight: '1.375rem'
          },
          '&.MuiButton-warning, &.MuiButton-warning:active': {
            color: theme.palette.warning.dark,
            backgroundColor: theme.palette.warning.light
          },
          '&.MuiButton-warning:hover': {
            color: theme.palette.warning.contrastText,
            backgroundColor: theme.palette.warning.main,
          },
          '&.MuiButton-contained.MuiButton-containedPrimary': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.contrastText,
            '&:hover, &:active': {
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.secondary.main,
            }
          },
          '&.MuiButton-outlined.MuiButton-outlinedPrimary': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            '&, &:hover, &:active, &:disabled.Mui-disabled': {
              border: 'none',
            },
            '&:hover, &:active': {
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.primary.dark,
            },
            "&:disabled.Mui-disabled": {
              backgroundColor: theme.palette.greys['100'],
              color: theme.palette.greys['300'],
            }
          },
          "&.MuiButton-root:disabled": {
            color: theme.palette.greys['300'],
          },
          "&.MuiButton-contained:disabled": {
            backgroundColor: theme.palette.greys['100'],
          },
          '&.MuiButton-outlined:disabled': {
            borderColor: theme.palette.greys['100'],
          },
        }
      }
    }
  }
});


export function Button({ children, label, color, ...props }) {

  const [localTheme, setLocalTheme] = React.useState();

  let tempLocalTheme = createTheme(buttonTheme, {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&.MuiButton-contained, &.MuiButton-contained.MuiButton-contained:active': {
              backgroundColor: theme['palette'][color]['light'],
              color: theme['palette'][color]['main'],
            },
            '&.MuiButton-contained:hover': {
              backgroundColor: theme['palette'][color]['main'],
              color: theme['palette'][color]['contrastText'],
            },
            '&.MuiButton-outlined': {
              backgroundColor: theme['palette'][color]['contrastText'],
              borderColor: theme['palette'][color]['main'],
              color: theme['palette'][color]['main'],
              '&:hover, &:active': {
                color: theme['palette'][color]['main'],
                backgroundColor: theme['palette'][color]['light'],
              }
            },
          }
        }
      }
    }
  });
  if (!localTheme) {
    setLocalTheme(tempLocalTheme) 
  }
 
  return (
    <Typography variant="button">
      <ThemeProvider theme={localTheme}>
        <MuiButton color={color} {...props}>
          {label && <Box component="span" >{label}</Box>}
          {children}
        </MuiButton>
      </ThemeProvider>
    </Typography>
  );
}
