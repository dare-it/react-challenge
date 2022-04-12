export const blockInvalidNumberChars = (e) =>
  ['e', 'E'].includes(e.key) && e.preventDefault();
