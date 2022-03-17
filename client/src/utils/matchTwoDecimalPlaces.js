export const matchTwoDecimalPlaces = (e, callback) => {
    if (
      !e.target.value.match(/^-?(0|[1-9]\d*)([,.]\d{0,2})?$/) &&
      e.target.value !== ''
    ) {
      return;
    }

    callback(e);
  };