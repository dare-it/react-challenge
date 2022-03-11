import React from 'react'
import { Modal } from '../molecules/modal/Modal';

export const AddNewLedgerRecordModal = ({ type,...props }) => {
  return (<Modal {...props} title={type === "INCOME" ? "Dodaj wpływ" : "Dodaj wydatek"} />);
};