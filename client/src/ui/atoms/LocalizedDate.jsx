// eslint-disable-next-line no-unused-vars
import React from 'react';
import { DateTime } from 'luxon';
export const LocalizedDate = ({ date }) => {
  const dateISO = new Date(date).toISOString();
  return DateTime.fromISO(dateISO).toFormat('dd.LL.yyyy HH:mm:ss');
};
