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

        <MuiButton variant={'contained'} color={'primary'} sx={{
          width: "34",
          height: "72",

          ':action': {
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },

        }}>Button</MuiButton>

        <MuiButton variant={'contained'} color={'primary'} endIcon={<SendIcon />} sx={{
          width: "34",
          height: "72",

          ':action': {
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },

        }}>Button</MuiButton>

        <MuiButton variant={'outlined'} color={'primary'} endIcon={<MouseIcon />} sx={{
          width: "34",
          height: "72",
          ':hover': {
            backgroundColor: '#C5CAE9',
            color: "#223289",
          },
          ':action': {
            backgroundColor: '#C5CAE9',
            color: "#223289",
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },

        }}>Button</MuiButton>

        <MuiButton variant={'contained'} color={'error'} startIcon={<DangerousIcon />} sx={{
          bgcolor: "#FCECE6",
          color: "#FF5D5D",
          width: "34",
          height: "72",
          ':hover': {
            backgroundColor: '#FF5D5D',
            color: "#FFFFFF",
          },
          ':action': {
            bgcolor: "#FCECE6",
            color: "#FF5D5D",
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },
        }}>Button</MuiButton>

        <MuiButton variant={'outlined'} color={'error'} sx={{
          width: "34",
          height: "72",
          fontWeight: "600",
          fontSize: "15",
          ':hover': {
            bgcolor: '#FDE8E0',
          },
          ':action': {
            bgcolor: '#FDE8E0',
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },
        }}>Button</MuiButton>

        <MuiButton variant={'contained'} color={'success'} sx={{
          bgcolor: "#DBEBDB",
          color: "#00A980",
          width: "34",
          height: "72",
          fontWeight: "600",
          fontSize: "15",
          ':hover': {
            bgcolor: '#00A980',
            color: "#FFFFFF",
          },
          ':action': {
            bgcolor: "#DBEBDB",
            color: "#00A980",
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },
        }}>Button</MuiButton>

        <MuiButton variant={'outlined'} color={'success'} sx={{
          width: "34",
          height: "72",
          fontWeight: "600",
          fontSize: "15",
          ':hover': {
            bgcolor: '#DBEBDB',
          },
          ':action': {
            bgcolor: '#DBEBDB',
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },
        }}>Button</MuiButton>

        <MuiButton variant={'contained'} color={'warning'} sx={{
          bgcolor: "#FFF5D2",
          color: "#B28C09",
          width: "34",
          height: "72",
          fontWeight: "600",
          fontSize: "15",
          ':hover': {
            bgcolor: '#FFA726',
            color: "#FFFFFF",
          },
          ':action': {
            bgcolor: "#FFF5D2",
            color: "#B28C09",
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },
        }}>Button</MuiButton>

        <MuiButton variant={'outlined'} color={'warning'} sx={{
          width: "34",
          height: "72",
          fontWeight: "600",
          fontSize: "15",
          ':hover': {
            bgcolor: '#FFF5D2',
          },
          ':action': {
            bgcolor: '#FFF5D2',
          },
          ':disabled': {
            bgcolor: "#f1f1f1"
          },
        }}>Button</MuiButton>

        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <NoContent ></NoContent></div>
          <Error></Error>

      </div>
    </>
  );
}
