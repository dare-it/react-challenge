import * as PropTypes from 'prop-types';
import { Modal } from 'ui';

export const AddNewBudgetRecordModal = ({ children, open, onClose }) => {
  const modalHeader = 'Zdefiniuj budżet';

  return (
    <Modal description={modalHeader} open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};

AddNewBudgetRecordModal.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
