import React from 'react'

import { Modal } from 'ui'
import { INCOME } from 'ledgerKeys'


export const AddNewLedgerRecord = (props) => {
    return <Modal title= {props.mode === INCOME ? 'Dodaj wpływ' : 'Dodaj wydatek'} {...props}/>
}