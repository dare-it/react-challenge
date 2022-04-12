import * as React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import DangerousIcon from '@mui/icons-material/Dangerous';
import MouseIcon from '@mui/icons-material/Mouse';
import { NoContent } from './NoContent';
import { Error } from './Error';
import PropTypes from 'prop-types';

/*
const theme = createTheme({
  palette: {
    getContrastText:'fE()',
    text:{
      primary:'rgba(0, 0, 0, 0.87)',
      secondary:'rgba(0, 0, 0, 0.6)',
    },
    secondary:{
      main:'#E8EAF6',
      dark:'#C5CAE9'
    },
    primary:{
      main:'#334ACC',
      dark:'#223289'
    },
    success:{
      main:'#66BB6A',
      dark:'#00A980',
      light:'#DBEBDB'
    },
    warning:{
      main:'#FFF5D2',
      dark:'#FFA726',
      light:'#B28C09'
    },
    error:{
      main:'#FF5D5D',
      light:'#FCECE6'
    },
    grey:{
      foreground:'#333333',
      level4:'rgba(51, 51, 51, 0.5)',
      level3:'rgba(51, 51, 51, 0.25)',
      level1: 'rgba(51, 51, 51, 0.07)',
      background:'#FFFFFF',
      300:'#e0e0e0'
    },
    action:{
      active:'rgba(0, 0, 0, 0.54)',
      hoverOpacity:0.04,
      hover:'rgba(0, 0, 0, 0.54)',
    },
  },
});
<ThemeProvider theme={theme}>
</ThemeProvider>
*/

export function Button({ children, ...props }) {

  return (
    <>
      <div>
        <MuiButton {...props}>{children}</MuiButton>
        
      </div>
    </>
  );
}
