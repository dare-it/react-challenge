// TODO: refactor later with Eslint rules
/* eslint-disable no-param-reassign */
/* eslint-disable unicorn/prefer-string-slice */

export const formatDollarsToCents = (value) => {
  value = String(value).replace(/[^\d.-]/g, '');
  if (value && value.includes('.')) {
    value = value.substring(0, value.indexOf('.') + 3);
  }

  return value ? Math.round(Number.parseFloat(value) * 100) : 0;
};

export const formatCentsToDollars = (value) => {
  const cents = Number.parseFloat(String(value).replace(/[^\d.-]/g, ''));
  return cents ? cents / 100 : 0;
};
