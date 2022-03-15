import React from 'react';
import Modal from 'ui/molecules/Modal';

const AddNewBudgetRecordModal = ({ type, ...props }) => {
  return <Modal {...props} header="Zdefiniuj budżet" />;
};

export default AddNewBudgetRecordModal;
