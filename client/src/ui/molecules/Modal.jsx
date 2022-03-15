import * as React from 'react';
import { Modal as MuiModal, Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';

import { Button } from "../../ui";

export function Modal({ open, description, handleClose, children }) {

    const [disabled, setDisabled] = React.useState(false);

    const handleSubmit = () => {
        console.log('handle submit');
    }

    return (
        <MuiModal
            open={open}
            onClose={handleClose}
        >
            <Card>
                <CardHeader sx={{ my: 0,  }} component="h4" title={description} />
                <CardContent>
                    <Typography sx={{ mt: 2 }}>
                        {children}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', pb: 0, mb: 0, pr: 0, mr: 0 }}>
                    <Button variant={'outlined'} color={'primary'} label={"Anuluj"} onClick={handleClose} />
                    <Button variant={'contained'} disabled={disabled} color={'primary'} label={"Zapisz"} onClick={handleSubmit} />
                </CardActions>
            </Card>
        </MuiModal>
    );
}