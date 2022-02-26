import React from 'react'
import MoneyManageModal from 'ui/molecules/modal/Modal'


export const AddNewBudgetRecordModal = ({ open, handleOpen, handleClose, handleSubmit, modalRef, ...props }) => {
    return (
        <MoneyManageModal
            title={"Zdefiniuj budżet"}
            description={"test text"}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            modalRef={modalRef} />
    )
}
