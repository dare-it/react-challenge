import * as React from 'react';
import {Button as MuiButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Button({children, ...props}) {
    return <MuiButton {...props} startIcon={<AddIcon/>} endIcon={<ArrowForwardIosIcon/>} disableRipple
                      onClick={() => console.log("Button clicked")}>{children}</MuiButton>;
}
