import React from 'react';

import { ModalComponent } from 'ui/molecules/Modal';

export const AddNewBudgetRecord = ({title, open, setOpen}) => {
  return(
    <ModalComponent
      title={title}
      open={open}
      setOpen={setOpen}
    />
  )
}