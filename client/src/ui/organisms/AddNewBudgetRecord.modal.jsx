import { Modal } from 'ui/molecules/Modal';

export const AddNewBudgetRecord = (props) => {
    return (
        <Modal onClose={props.onClose} open={props.open} children={props.children} description="Zdefiniuj budżet" />
    )
}