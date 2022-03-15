import React from 'react';
import Modal from 'ui/molecules/Modal';

const AddNewLedgerRecordModal = ({ type, ...props }) => {
  return (
    <Modal
      {...props}
      header={type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek'}
    />
  );
};

export default AddNewLedgerRecordModal;
