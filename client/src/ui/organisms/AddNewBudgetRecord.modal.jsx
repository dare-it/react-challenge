import { Modal } from 'ui';

export const AddNewBudgetRecord = ({
  open,
  onClose,
  onSubmit,
  ...props
}) => {
  return (
    <Modal
      title="Zdefiniuj budżet"
      open={open}
      onSubmit={onSubmit}
      onClose={onClose}
    >
      {props.children}
    </Modal>
  );
};
