const validNumberRegexp = /^\d+(?:[,.]\d{1,2})?$/;

export const formInputs = {
  name: {
    elementName: 'nameValue',
    label: 'Nazwa',
    inputProps: {
      max: 100,
      min: 1,
    },
    validationRules: {
      required: 'Nazwa nie może być pusta',
      validate: {
        onlySpaceNotAllowed: (value) => {
          const onlySpaces = value.trim().length === 0;
          return !onlySpaces || 'Nazwa nie może być pusta';
        },
      },
    },
  },
  amount: {
    elementName: 'amountValue',
    label: 'Kwota',
    inputProps: {
      min: 0,
      max: 1000000,
    },
    validationRules: {
      required: 'Kwota nie może być pusta',
      validate: {
        moreThanZero: (value) => value > 0 || 'Kwota musi być większa niż 0',
        lessThanMillion: (value) =>
          value <= 1000000 || 'Kwota nie może być większa niż 1000000',
        decimalPoints: (value) => {
          const stringValue = `${value}`;
          return (
            validNumberRegexp.test(stringValue) ||
            'Kwota nie może mieć więcej niż dwa miejsca po przecinku'
          );
        },
      },
    },
  },
  category: {
    elementName: 'categoryValue',
    label: 'Kategoria',
    labelId: 'category-select',
    validationRules: {
      required: 'Wybierz kategorię',
      validate: {
        notEmpty: (value) => value.toString().length > 0 || 'Wybierz kategorię',
      },
    },
  },
};
