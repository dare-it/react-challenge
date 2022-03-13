import React from 'react';
import * as PropTypes from 'prop-types'
import {Modal} from 'ui/molecules/Modal';

export const AddNewLedgerRecord = ({type, open, onClose}) => {
  
if(type === "INCOME") {
    return (
    <Modal open = {open} onClose = {onClose} modalTitle='Dodaj wpływ' description = 'Description'></Modal>
    )
};
if(type === "EXPENSE") {
    return (
    <Modal open = {open} onClose = {onClose} modalTitle='Dodaj wydatek' description = 'Description'></Modal>
    );
}

};


AddNewLedgerRecord.propTypes = {
    type: PropTypes.oneOf(["INCOME", "EXPENSE"]),
    open: PropTypes.bool,
    onClose: PropTypes.func,
  };
