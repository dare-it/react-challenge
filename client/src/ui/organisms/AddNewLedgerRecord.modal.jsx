import * as PropTypes from 'prop-types';
import { Modal } from 'ui';

// TODO: add props!
export const AddNewLedgerRecordModal = ({ type, children, open, onClose }) => {
  const modalHeader = type === 'INCOME' ? 'Dodaj wpływ' : 'Dodaj wydatek';

  return (
    <Modal description={modalHeader} open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};

AddNewLedgerRecordModal.propTypes = {
  type: PropTypes.oneOf(['INCOME', 'EXPENSE']),
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
