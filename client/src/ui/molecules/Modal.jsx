import React from 'react';

import { Modal, Card, CardHeader, CardContent, CardActions } from '@mui/material'
import { Button } from '../atoms/Button'


export const ModalComponent = ({children, title, open, setOpen}) => {

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = () => null

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card style={cardStyleOveride}>
          <CardHeader id="modal-modal-title" titleTypographyProps={{variant: 'h4'}} title={title}/>
          <CardContent id="modal-modal-description">{children}</CardContent>
          <CardActions style={actionStyleOveride}>
            <Button variant='outlined' color='primary' onClick={handleClose} >Anuluj</Button>
            <Button variant='contained' color='primary' onClick={onSubmit} >Zapisz</Button>
          </CardActions>
        </Card>
      </Modal>
  )
}

/* STYLE OVERIDES */

const cardStyleOveride = {
  width: '450px',
  height: '197px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
}

const actionStyleOveride = {
  justifyContent: 'flex-end',
  marginTop: 'auto',
}