import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { SUMMARY_QUERY } from 'queryKeys';
import { SummaryService } from 'api';
import { useQuery } from 'react-query';
import { Card } from 'ui';
import { formatCentsToDollars } from 'utils';
import { htmlLegendPlugin } from 'utils';
import { Box, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const data1 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Spending',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const Balance = () => {
  const getSummaryData = async () => {
    const summary = await SummaryService.findAll();

    return {
      ...summary,
      spending: summary.spending.reduce((acc, curr) => {
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

  const { isLoading, error, data } = useQuery(SUMMARY_QUERY, getSummaryData);

  if (isLoading) return 'Loading';
  if (error) return 'Error';

  const chartData = ({ spending }) => {
    return {
      labels: spending.categoryName,
      datasets: [
        {
          label: 'Spending',
          data: spending.amountInCents.map((amount) =>
            formatCentsToDollars(amount),
          ),
          backgroundColor: spending.categoryColor,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      htmlLegend: {
        containerID: 'legend-container',
      },
      legend: {
        display: false,
      },
    },
  };

  const plugins = [htmlLegendPlugin];

  return (
    <Card>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h4'>Saldo</Typography>
        <Typography variant='h3'>{formatCentsToDollars(data.balance)} PLN</Typography>
      </Box>
      <Typography variant='subtitle1'>Pozostała kwota</Typography>
      { data.spending.amountInCents ? 
        (<> 
          <Doughnut data={chartData(data)} options={options} plugins={plugins} />
          <Box id="legend-container" sx={{ marginTop: '20px' }} />
        </>)
        : <Typography variant='p'>Brak wyników</Typography>  
      }
    </Card>
  );
};
