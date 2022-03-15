import { Modal } from 'ui';

export const AddNewLedgerRecord = ({
  open,
  onClose,
  onSubmit,
  type,
  ...props
}) => {
  let title;
  if (type === 'INCOME') title = 'Dodaj wpływ';
  if (type === 'EXPENSE') title = 'Dodaj wydatek';
  
  return (
    <Modal title={title} open={open} onSubmit={onSubmit} onClose={onClose}>
      {props.children}
    </Modal>
  );
};
