import { useSnackbar } from "notistack";
import { useCallback } from "react";
import  Slide  from "@mui/material";

export const useSnackBar=()=>{
    const {enqueueSnackbar} = useSnackBar();
    const showSnackbar = useCallback((message, variant) => {
        enqueueSnackbar(message, {
        maxSnack:3,
        autoHideDuration:5000,
        TransitionComponent:Slide,
        anchorOrigin:{
          vertical: 'bottom',
          horizontal: 'right',
        },
        sx:{backgroundColor:(theme)=>
            (variant === 'success' && theme.palette.success.main) ||(variant === 'error' && theme.palette.error.main),
         },
        },
      );
    },
    [enqueueSnackbar],
  );
  return showSnackbar
};