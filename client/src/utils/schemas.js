import * as yup from 'yup';

export const ledgerValidatoin = yup.object({
  name: yup.string().trim().required('Nazwa nie może być pusta'),
  amount: yup
    .number()
    .typeError('Kwota musi być numerem')
    .moreThan(0, 'Kwota musi być większa niż 0')
    .max(1000000, 'Kwota nie może być większa niż 1000000')
    .required('Kwota nie może być pusta'),
  categoryId: yup.string().required('Kategoria nie moze być pusta'),
});

export const budgetValidation = yup.object({
  amount: yup
    .number()
    .typeError('Kwota musi być numerem')
    .moreThan(0, 'Kwota musi być większa niż 0')
    .max(1000000, 'Kwota nie może być większa niż 1000000')
    .required('Kwota nie może być pusta'),
  categoryId: yup.string().required('Kategoria nie moze być pusta'),
});
