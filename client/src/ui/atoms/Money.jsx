import * as PropTypes from 'prop-types';
import { formatCentsToDollars } from 'utils';

export const Money = ({ inCents }) => <>{formatCentsToDollars(inCents)} PLN</>;

Money.propTypes = {
  inCents: PropTypes.number.isRequired,
};
