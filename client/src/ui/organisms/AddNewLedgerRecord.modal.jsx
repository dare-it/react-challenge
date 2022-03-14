import React from 'react';
import { Modal } from '../molecules/Modal'
import PropTypes from 'prop-types';

const translationKeys = {
    income: 'wpływ',
    expense: 'wydatek',
};

export const AddNewLedgerRecord = ({ type, open, onClose }) => {
    const handleClose = () => {
        onClose();
    }
    return (
        <Modal open={open} onClose={handleClose} title={`Dodaj ${translationKeys[type.toLowerCase()]}`}></Modal>
    );
};

AddNewLedgerRecord.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    type: PropTypes.string,
};