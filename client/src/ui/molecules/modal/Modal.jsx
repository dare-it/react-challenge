import React from 'react'
import { Modal, Typography, Box, CardHeader } from '@mui/material'
import { Button } from 'ui/atoms/Button'
import { useState } from 'react'

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
    p: 2,
    display: 'flex',
    flexDirection: 'column'

}

const MoneyManageModal = ({ title, description, children, ...props }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            modalTitle={title}
            modalDescription={description}
            modalContent={children}>
            <Box sx={modalStyling}>
                <CardHeader>{title}</CardHeader>
                <Typography variant={'h4'}>{description}</Typography>
                <Box>
                    <Button variant={'outlined'} onClose={() => null}>Anuluj</Button>
                    <Button variant={'contained'} onSubmit={() => null}>Zatwierdz</Button>
                </Box>
            </Box>
        </Modal >
    )
}

export default MoneyManageModal