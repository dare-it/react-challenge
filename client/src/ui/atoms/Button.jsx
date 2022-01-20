import * as React from 'react';
import {Button as MuiButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Button({children, ...props}) {

    const buttonClickHandler = () => {
        console.log("button clicked")
    }
    const startIcon = false
    const endIcon = false
    const iconStart = <AddIcon />
    const iconEnd =<ArrowForwardIosIcon />
    return <MuiButton {...props} startIcon={startIcon && iconStart} endIcon={endIcon && iconEnd} onClick={buttonClickHandler}>{children}</MuiButton>;
}
