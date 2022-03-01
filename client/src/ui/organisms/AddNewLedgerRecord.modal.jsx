import { Modal } from 'ui';

export const AddNewLedgerRecord = ({
  open,
  onClose,
  onSubmit,
  type,
  ...props
}) => {
  if (type === 'INCOME')
    return (
      <Modal
        title="Dodaj wpływ"
        open={open}
        onSubmit={onSubmit}
        onClose={onClose}
      >
        {props.children}
      </Modal>
    );
  if (type === 'EXPENSE')
    return (
      <Modal
        title="Dodaj wydatek"
        open={open}
        onSubmit={onSubmit}
        onClose={onClose}
      >
        {props.children}
      </Modal>
    );
};
