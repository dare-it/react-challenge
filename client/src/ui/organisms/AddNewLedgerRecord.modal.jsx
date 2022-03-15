import { Modal } from '../../ui';

export function AddNewLedgerRecord({ type, open, handleClose }) {

    let description = "";

    switch (type) {
        case 'INCOME': {
            description = 'Dodaj wpływ';
            break;
        };
        case 'EXPENSE': {
            description = 'Dodaj wydatek';
            break;
        }
    }

    return (
        <Modal open={open} description={description} handleClose={handleClose} />
    )
}
