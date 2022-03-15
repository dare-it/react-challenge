/* eslint-disable unicorn/no-object-as-default-parameter */
/* eslint-disable unicorn/no-useless-undefined */

export const getBrowserLocales = (
  options = {
    languageCodeOnly: false,
  },
) => {
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map((locale) => {
    const trimmedLocale = locale.trim();

    return options.languageCodeOnly
      ? trimmedLocale.split(/-|_/)[0]
      : trimmedLocale;
  });
};
