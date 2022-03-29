import { Modal } from 'ui/molecules/Modal';

export const AddNewLedgerRecord = (props) => {

    if (props.type === "INCOME") {
        return (
            <Modal onClose={props.onClose} open={props.open} children={props.children} description="Dodaj wpływ" />
        )
    } else if (props.type === "EXPENSE") {
        return (
            <Modal onClose={props.onClose} open={props.open} children={props.children} description="Dodaj wydatek" />
        )
    } 
}