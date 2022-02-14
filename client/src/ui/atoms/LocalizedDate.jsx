// eslint-disable-next-line no-unused-vars
import React from 'react';
import moment from 'moment'
export const LocalizedDate = ({ date }) => {
  return moment(date).format('DD.MM.YYYY, h:mm:ss');
};
