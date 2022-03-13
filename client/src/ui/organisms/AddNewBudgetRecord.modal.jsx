import React from 'react';
import * as PropTypes from 'prop-types'
import {Modal} from 'ui/molecules/Modal';

export const AddNewBudgetRecord = ({ open, onClose}) => {

    return (
    <Modal open = {open} onClose = {onClose} modalTitle='Zdefiniuj budżet' description = '...'></Modal>
    )
};

AddNewBudgetRecord.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
}