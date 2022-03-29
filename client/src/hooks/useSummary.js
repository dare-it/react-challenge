/* eslint-disable unicorn/no-array-for-each */
import { SummaryService } from 'api';
import { SUMMARY_QUERY } from 'queryKeys';
import { useQuery } from 'react-query';

const getSummary = () => SummaryService.findAll();

const getFormattedData = (summaryData) => {
  const labels = [];
  const dataValue = [];
  const backgroundColor = [];

  const sortData = (el) => {
    labels.push(el.categoryName);
    dataValue.push(el.amountInCents);
    backgroundColor.push(el.categoryColor);
  };

  summaryData.spending.forEach((element) => {
    sortData(element);
  });

  return {
    balance: summaryData.balance,
    chartData: {
      labels,
      datasets: [
        {
          data: dataValue,
          backgroundColor,
          borderWidth: 0,
        },
      ],
    },
  };
};

export const useSummary = () =>
  useQuery(SUMMARY_QUERY, getSummary, {
    select: getFormattedData,
  });
