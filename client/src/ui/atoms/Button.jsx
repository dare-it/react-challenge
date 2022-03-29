import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme.js';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveIcon from '@mui/icons-material/Remove';


export const buttonStyles = {
  primaryOutlined: {
    bgcolor: 'primary.outlinedMain',
    color: "primary.outlinedTextMain",
    border: "0",
    ":hover": {
      bgcolor: "primary.outlinedHover",
      color: "primary.outlinedTextSecondary",
      border: "0",
    },
    ":active": {
      bgcolor: "primary.outlinedHover",
      color: "primary.outlinedTextSecondary",
      border: "0",
    }
  },
  primaryContained: {
    bgcolor: 'primary.main',
    color: "primary.contrastText",
    border: "0",
    ":hover": {
      bgcolor: 'primary.dark',
    },
    ":active": {
      bgcolor: 'primary.dark',
    }
  },
  errorOutlined: {
    bgcolor: '#fff',
    color: "error.border",
    border: "1",
    borderColor: "error.border",
    ":hover": {
      bgcolor: "error.hover",
      borderColor: "error.border",
      border: "1",
    },
    ":active": {
      bgcolor: "error.hover",
      borderColor: "error.border",
      border: "1",
    }
  },
  errorContained: {
    bgcolor: 'error.main',
    color: "error.contrastText",
    border: "0",
    ":hover": {
      bgcolor: "error.dark",
      color: "#fff"
    },
    ":active": {
      bgcolor: "error.main",
      color: "error.contrastText",
    }
  },
  successOutlined: {
    bgcolor: '#fff',
    color: "success.hoverText",
    border: "1",
    borderColor: "#66BB6A",
    ":hover": {
      bgcolor: 'success.main',
      border: "1",
      borderColor: 'success.border',
      color: "success.hoverText",
    },
    ":active": {
      bgcolor: 'success.main',
      border: "1",
      borderColor: 'success.border',
      color: "success.hoverText",
    }
  },
  successConained: {
    bgcolor: 'success.main',
    color: "success.contrastText",
    border: "0",
    ":hover": {
      bgcolor: "success.dark",
      color: "#fff"
    },
    ":active": {
      bgcolor: 'success.main',
      color: "success.contrastText",
    }
  },
  warningOutlined: {
    bgcolor: 'warning.outlinedMain',
    color: "warning.outlinedTextMain",
    borderColor: "warning.border",
    border: "1",
    ":hover": {
      color: "warning.outlinedTextSecondary",
      bgcolor: "warning.outlinedHover",
      borderColor: "warning.border",
      border: "1",
    },
    ":active": {
      color: "warning.outlinedTextSecondary",
      bgcolor: "warning.outlinedHover",
      borderColor: "warning.border",
      border: "1",
    }
  },
  warningContained: {
    bgcolor: 'warning.main',
    color: "warning.contrastText",
    border: "0",
    ":hover": {
      bgcolor: "warning.dark",
      color: "#fff"
    },
    ":active": {
      bgcolor: 'warning.main',
      color: "warning.contrastText",
    }
  },
  Icon: {
      addIcon: <AddIcon />,
      nextIcon: <ArrowForwardIosIcon />,
      removeIcon: <RemoveIcon />,
    },
}

export function Button({ children, ...props }) {



  return (
    <ThemeProvider theme={theme}>
      <MuiButton sx={props.buttonVariant} {...props}>{children}</MuiButton>
    </ThemeProvider>
    );
}

