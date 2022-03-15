import React from 'react'

import {Modal as MuiModal, Card, CardActions, CardHeader, CardContent} from '@mui/material';
import { Button } from 'ui'

export const Modal = (props) => {
    return (
         <MuiModal {...props}>
            <Card sx={{
                padding: '40px 32px',
                width: '450px',
                minHeight: '194px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0px 2px 10px rgba(17, 25, 69, 0.1)'
            }}>
                <CardHeader
                {...props}
                subheader={props.description}
                titleTypographyProps={{ variant:'h4'}}
                sx= { (theme) => ({
                    fontFamily: theme.typography.fontFamily,
                    color: '#000' })
                    }
                />
                <CardContent>
                    {props.children}
                </CardContent>
                <CardActions sx= {{ display: 'flex', justifyContent: 'flex-end'}}>
                    <Button onClick={props.onClose} variant='outlined' color='primary' sx={{marginRight: '12px'}}>Anuluj</Button>
                    <Button onClick={props.onSubmit} variant='contained' color='primary' {...props}>Zapisz</Button>
                </CardActions>
            </Card>
        </MuiModal>
    )
}