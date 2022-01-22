import * as React from 'react';
import {Button as MuiButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Button({children, startIcon, endIcon, ...props}) {
    return <MuiButton {...props}  disableRipple startIcon={startIcon && <AddIcon />} endIcon={endIcon && <ArrowForwardIosIcon />}
                      onClick={() => console.log("Button clicked")}>{children}</MuiButton>;
}

