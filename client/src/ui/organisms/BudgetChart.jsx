import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { BUDGET_QUERY } from 'queryKeys';
import { BudgetService } from 'api';
import { Loader, Error } from 'ui';

ChartJS.register(...registerables);

const options = {
  indexAxis: 'y',
};

export const BudgetChart = () => {
  const { isLoading, isError, data } = useQuery(
    BUDGET_QUERY,
    BudgetService.findAll,
    {
      select: useCallback((data) => {
        return {
          labels: data?.map((el) => `${el.category.name} %`),
          datasets: [
            {
              data: data?.map((el) => el.currentSpendingPercent),
              backgroundColor: data.map((el) => el.category.color),
            },
          ],
        };
      }, []),
    },
  );

  const isDataEmpty = data?.datasets[0].data.every((item) => item === 0);

  return (
    <Card sx={{ paddingBottom: '0' }}>
      <CardContent>
        <Typography variant="h4">Budżet</Typography>
        <Typography variant="subtitle1">Podsumowanie wydatków</Typography>
        <Box sx={{ marginTop: '20px' }}>
          {isLoading && <Loader />}
          {isError && <Error />}
          {!isLoading && !isError && isDataEmpty && (
            <Typography variant="body1">Brak wyników</Typography>
          )}
          {!isLoading && !isError && !isDataEmpty && (
            <Bar data={data} options={options} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
