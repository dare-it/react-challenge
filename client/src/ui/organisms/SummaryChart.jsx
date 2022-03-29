import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { SummaryService } from 'api';
import { Card, Error, Loader } from 'ui';
import { Box, Typography } from '@mui/material';
import { formatCentsToDollars } from 'utils';
import { createChartLegend } from 'utils/createChartLegend';

const SummaryChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const { isLoading, error, data } = useQuery('chartServiceData', () =>
    SummaryService.findAll(),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  const prepareDataChart = ({ spending }) => {
    return {
      labels: spending.map((item) => item.categoryName),
      datasets: [
        {
          label: 'Spending',
          data: spending.map((item) =>
            formatCentsToDollars(item.amountInCents),
          ),
          backgroundColor: spending.map((item) => item.categoryColor),
        },
      ],
    };
  };

  console.log(data);

  const config = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      createChartLegend: {
        // ID of the container to put the legend in
        containerID: 'legend-container',
      },
      legend: {
        display: false,
      },
    },
  };

  const plugins = [createChartLegend];

  return (
    <Card>
      <Box>
        <Typography variant="h4">Saldo</Typography>
        <Typography variant="h3">
          {formatCentsToDollars(data.balance)} PLN
        </Typography>
      </Box>
      {data.spending.length !== 0 ? (
        <>
        <Typography variant="subtitle1">Pozostała kwota</Typography>
        <Doughnut data={prepareDataChart(data)}  options={config} plugins={plugins}/>
        <Box id="legend-container" sx={{ marginTop: '20px' }} />
        </>
      ) : (
        <Typography variant="body1">Brak wyników</Typography>
      )}
    </Card>
  );
};

export default SummaryChart;
