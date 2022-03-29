import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { BudgetService } from 'api';
import { Card, Error, Loader } from 'ui';
import { Box, Typography } from '@mui/material';

const BudgetChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const { isLoading, error, data } = useQuery('budgetChartServiceData', () =>
    BudgetService.findAll(),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const prepareDataChart = (data) => {
    return {
      labels: data.map((item) => `${item.category.name} %`),
      datasets: [
        {
          label: 'Expenses',
          data: data.map((item) => item.currentSpendingPercent),
          backgroundColor: data.map((item) => item.category.color),
        },
      ],
    };
  };

  console.log(data.every((item) => item.currentSpendingPercent > 0));
  console.log(prepareDataChart(data));

  const config = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card>
      <Box>
        <Typography variant="h4">Budżet</Typography>
        <Typography variant="subtitle1">Podsumowanie wydatków</Typography>
      </Box>
      {data.length !== 0 &&
      data.every((item) => item.currentSpendingPercent > 0) ? (
        <Bar data={prepareDataChart(data)} options={config} />
      ) : (
        <Typography variant="body1">Brak wyników</Typography>
      )}
    </Card>
  );
};

export default BudgetChart;
