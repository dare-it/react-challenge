import React from 'react'
import MoneyManageModal from 'ui/molecules/modal/Modal'

export const AddNewLedgerRecordModal = ({ type, open, handleOpen, handleClose, handleSubmit, modalRef, ...props }) => {

    if (type === "INCOME") return (<MoneyManageModal title={"Dodaj wpływ"} description={"Dodawanie wpływów / test text"} handleClose={handleClose} handleSubmit={handleSubmit} modalRef={modalRef} />)
    if (type === "EXPENSE") return (<MoneyManageModal title={"Dodaj wydatek"} description={"Dodawanie wydatków / test text"} handleClose={handleClose} handleSubmit={handleSubmit} modalRef={modalRef} />)
}
