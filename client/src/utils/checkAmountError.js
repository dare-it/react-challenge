export const checkAmountError = ({amount}) => {
    if (amount.type === 'required') {
      return 'Kwota nie może być pusta';
    } else if (amount.type === 'max') {
      return 'Kwota nie może być większa niż 1000000';
    } else if (amount.type === 'min') {
      return 'Kwota musi być większa niż 0';
    }
};