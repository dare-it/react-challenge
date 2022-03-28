import React from 'react';
import { BUDGET_QUERY } from 'queryKeys';
import { BudgetService } from 'api';
import { useQuery } from 'react-query';
import { Card, Error, Loader } from 'ui';
import { Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const Expenses = () => {
  const getBudgetData = async () => {
    const expenses = await BudgetService.findAll();

    return {
      expenses: expenses
        .map((expense) => {
          return {
            currentSpendingPercent: expense.currentSpendingPercent,
            label: expense.category.name,
            color: expense.category.color,
          };
        })
        .reduce((acc, curr) => {
          Object.keys(curr).forEach((key) => {
            if (acc[key]) {
              acc[key].push(curr[key]);
            } else {
              acc[key] = [curr[key]];
            }
          });

          return acc;
        }, {}),
    };
  };

  const { isLoading, error, data } = useQuery(BUDGET_QUERY, getBudgetData);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const chartData = ({ expenses }) => {
    return {
      labels: expenses.label,
      datasets: [
        {
          label: 'Spending',
          data: expenses.currentSpendingPercent,
          backgroundColor: expenses.color,
        },
      ],
    };
  };

  return (
    <Card>
      <Typography variant="h4">Budżet</Typography>
      <Typography variant="subtitle1">Podsumowanie wydatków</Typography>
      {data.expenses.currentSpendingPercent &&
      data.expenses.currentSpendingPercent.every(
        (spending) => spending !== 0,
      ) ? (
        <Bar data={chartData(data)} options={options} />
      ) : (
        <Typography variant="p">Brak wyników</Typography>
      )}
    </Card>
  );
};
