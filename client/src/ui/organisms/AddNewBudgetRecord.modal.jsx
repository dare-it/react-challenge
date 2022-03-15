import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../molecules/Modal'

export const AddNewBudgetRecordModal = ({ open, onClose }) => {
    const handleClose = () => {
        onClose();
    };
    return( <Modal open={open} onClose={handleClose} title={'Zdefiniuj budżet'} />);
};

AddNewBudgetRecordModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
};
