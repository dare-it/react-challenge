import React from 'react';
import { Button } from 'ui/atoms/Button';
import { Card, CardHeader, CardContent, CardActions, Typography, Modal as MuiModal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 450
};

export const Modal = ({ open = false, onClose, title, children, onSubmit, canSubmit = true }) => {

    return (

        <MuiModal open={open} onClose={onClose}>
            <Card sx={style}>
                <CardHeader title={<Typography variant={'h4'}>{title}</Typography>}></CardHeader>
                <CardContent >{children}</CardContent>
                <CardActions sx={{ marginTop: 4, display: 'flex', justifyContent: 'end', }}>
                    <Button onClick={onClose} sx={{ marginRight: '8px' }}>Anuluj</Button>
                    <Button variant="contained" onClick={onSubmit} disabled={!canSubmit}>Zapisz</Button>
                </CardActions>
            </Card>
        </MuiModal>

    )
}