import * as PropTypes from 'prop-types';
import { formatCentsToDollars } from 'utils';

export const Money = ({ inCents, fixed }) => {
  const value = fixed
    ? formatCentsToDollars(inCents).toFixed(2)
    : formatCentsToDollars(inCents);

  return <>{value} PLN</>;
};

Money.propTypes = {
  inCents: PropTypes.number.isRequired,
  fixed: PropTypes.bool,
};

Money.defaultProps = {
  fixed: false,
};
