import * as React from 'react';
import { Modal } from '../../ui';

export function AddNewBudgetRecord({ open, handleClose }) {

    return (
        <Modal open={open} description={"Zdefiniuj budżet"} handleClose={handleClose} />
    )
}
