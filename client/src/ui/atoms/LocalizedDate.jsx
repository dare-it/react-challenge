import * as PropTypes from 'prop-types';
import { getBrowserLocales } from 'utils';

export const LocalizedDate = ({ date: rawDate }) => {
  const browserLocale = getBrowserLocales();
  return new Date(rawDate).toLocaleString(browserLocale[0]);
};

LocalizedDate.propTypes = {
  date: PropTypes.number.isRequired,
};
