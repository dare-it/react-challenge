import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { SUMMARY_QUERY } from 'queryKeys';
import { SummaryService } from 'api';
import { formatCentsToDollars } from 'utils';
import { Loader, Error, CategoryCell, Money } from 'ui';

ChartJS.register(...registerables);
ChartJS.defaults.plugins.legend.display = false;

export const BalanceChart = () => {
  const { isLoading, isError, data } = useQuery(
    SUMMARY_QUERY,
    SummaryService.findAll,
    {
      select: useCallback((data) => {
        return {
          chartData: {
            labels: data.spending.map((el) => el.categoryName),
            datasets: [
              {
                data: data.spending.map((el) =>
                  formatCentsToDollars(el.amountInCents),
                ),
                backgroundColor: data.spending.map((el) => el.categoryColor),
              },
            ],
          },
          balance: data.balance,
          legendData: data.spending,
        };
      }, []),
    },
  );

  return (
    <Card sx={{ paddingBottom: '0' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">Saldo</Typography>
          <Typography variant="h3">
            <Money inCents={data?.balance} />
          </Typography>
        </Box>
        <Typography variant="subtitle1">Pozostała kwota</Typography>
        <Box sx={{ margin: '40px auto', maxWidth: '200px' }}>
          {isLoading && <Loader />}
          {isError && <Error />}
          {!isLoading && !isError && data?.balance === 0 && (
            <Typography variant="body1">Brak wyników</Typography>
          )}
          {!isLoading && !isError && data?.balance !== 0 && (
            <Doughnut data={data?.chartData} />
          )}
        </Box>
        <Box>
          {data?.legendData.map((el) => (
            <CategoryCell
              key={el.categoryName}
              color={el.categoryColor}
              name={el.categoryName}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
