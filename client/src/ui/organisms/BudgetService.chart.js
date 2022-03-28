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
import { useQuery } from 'react-query';
import { BudgetService } from '../../api';
import { Loader } from '../atoms/Loader';
import { Error } from '../atoms/Error';
import {
  StyledChartSection,
  StyledBalanceContainer,
  StyledNoResults,
} from '../../styles/SummaryService.styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function ChartBudgetService() {
  const { isLoading, error, data } = useQuery('chartBudgetData', () =>
    BudgetService.findAll(),
  );
  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const resultChart = (dataChart) =>
    dataChart.reduce(
      (result, current) => {
        if (result.datasets[0].data.length === 0) {
          return {
            datasets: [
              {
                data: [current.currentSpendingPercent],
                backgroundColor: [current.category.color],
                borderWidth: 0,
              },
            ],
            labels: [`${current.category.name} %`],
          };
        } else {
          return {
            datasets: [
              {
                data: [
                  ...result.datasets[0].data,
                  current.currentSpendingPercent,
                ],
                backgroundColor: [
                  ...result.datasets[0].backgroundColor,
                  current.category.color,
                ],
                borderWidth: 0,
              },
            ],
            labels: [...result.labels, `${current.category.name} %`],
          };
        }
      },
      {
        datasets: [{ data: [], backgroundColor: [] }],
        labels: [],
      },
    );
  return (
    <StyledChartSection>
      <div>
        <StyledBalanceContainer>
          <Typography variant="h4">Budżet</Typography>
        </StyledBalanceContainer>
        <Typography variant="subtitle1">Podsumowanie wydatków</Typography>
      </div>
      {resultChart(data).datasets[0].data.every((item) => item === 0) ||
      data.length === 0 ? (
        <StyledNoResults>Brak wyników</StyledNoResults>
      ) : (
        <Bar options={options} data={resultChart(data)} />
      )}
    </StyledChartSection>
  );
}
