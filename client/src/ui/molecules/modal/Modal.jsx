import React from 'react'
import { Typography, Box } from '@mui/material'
import { Button } from 'ui/atoms/Button'

const modalStyling = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    height: '200px',
    bgcolor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: 20,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

}

const modalButtonsStyling = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
}

const MoneyManageModal = ({ title, description, handleClose, handleSubmit, ...props }) => {

    return (

        <Box sx={modalStyling}>

            <Typography variant={'h3'}>{title}</Typography>

            <Typography variant={'h4'}>{description}</Typography>
            <Box sx={modalButtonsStyling} >
                <Button variant={'outlined'} onClick={handleClose} sx={{ m: 1 }}>Anuluj</Button>
                <Button variant={'contained'} onClick={handleSubmit} sx={{ m: 1 }}>Zapisz</Button>
            </Box>
        </Box>
        // </Modal >
    )
}

export default MoneyManageModal