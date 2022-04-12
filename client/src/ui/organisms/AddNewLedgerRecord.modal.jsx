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
    showSnackbar(
      type === 'INCOME' ? 'Wpływ został dodany' : 'Wydatek został zapisany',
      'success',
    );
  return (
    <Modal open={open} onError={'Wystąpił nieoczekiwany błąd'} onClose={handleClose} title={`Dodaj ${translationKeys[type.toLowerCase()]}`}></Modal>
)}

AddNewLedgerRecord.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    type: PropTypes.string,
};