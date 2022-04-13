import React from 'react';

import { ModalComponent } from 'ui/molecules/Modal';

export const AddNewLedgerRecord = ({type, open, setOpen, children}) => {

  const setTitle = () => {
    if (type === 'INCOME') return 'Dodaj wpływ';
    if (type === 'EXPENSE') return 'Dodaj wydatek';
    return type;
  }

  const title = setTitle();

  return(
    <ModalComponent
      title={title}
      open={open}
      setOpen={setOpen}
      children={children}
    />
  )
}