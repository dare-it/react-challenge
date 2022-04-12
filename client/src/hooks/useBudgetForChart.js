/* eslint-disable unicorn/no-array-for-each */
import { BudgetService } from 'api';
import { BUDGET_QUERY } from 'queryKeys';
import { useQuery } from 'react-query';

const getBudget = () => BudgetService.findAll();

const getFormattedData = (budgetData) => {
  const labels = [];
  const dataValue = [];
  const backgroundColor = [];

  const sortData = (el) => {
    labels.push(`${el.category.name} %`);
    dataValue.push(el.currentSpendingPercent);
    backgroundColor.push(el.category.color);
  };

  budgetData.forEach((element) => {
    sortData(element);
  });

  return {
    chartData: {
      labels,
      datasets: [
        {
          data: dataValue,
          backgroundColor,
          barThickness: 20,
        },
      ],
    },
  };
};

export const useBudgetForChart = () =>
  useQuery(BUDGET_QUERY, getBudget, {
    select: getFormattedData,
  });
