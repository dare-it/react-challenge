import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { SummaryService } from '../../api';
import { Loader } from '../atoms/Loader';
import { Error } from '../atoms/Error';
import {
  StyledChartSection,
  StyledBalanceContainer,
  StyledChartContainer,
  StyledLegendContainer,
  StyledListElement,
  StyledNoResults,
} from '../../styles/SummaryService.styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ChartSummaryService() {
  const { isLoading, error, data } = useQuery('chartServiceData', () =>
    SummaryService.findAll(),
  );
  if (isLoading) return <Loader />;
  if (error) return <Error />;

  const resultChart = (dataChart) =>
    dataChart.reduce(
      (result, current) => {
        if (result.datasets[0].data.length === 0) {
          return {
            datasets: [
              {
                data: [current.amountInCents / 100],
                backgroundColor: [current.categoryColor],
                borderWidth: 0,
              },
            ],
            labels: [current.categoryName],
          };
        } else {
          return {
            datasets: [
              {
                data: [...result.datasets[0].data, current.amountInCents / 100],
                backgroundColor: [
                  ...result.datasets[0].backgroundColor,
                  current.categoryColor,
                ],
                borderWidth: 0,
              },
            ],
            labels: [...result.labels, current.categoryName],
          };
        }
      },
      {
        datasets: [{ data: [], backgroundColor: [], borderWidth: 0 }],
        labels: [],
      },
    );

  const options = { plugins: { legend: { display: false } } };
  return (
    <StyledChartSection>
      <div>
        <StyledBalanceContainer>
          <Typography variant="h4">Saldo</Typography>
          <Typography variant="h3">{data.balance / 100} PLN</Typography>
        </StyledBalanceContainer>
        <Typography variant="subtitle1">Pozostała kwota</Typography>
      </div>
      <StyledChartContainer>
        {data.spending.length === 0 ? (
          <StyledNoResults>Brak wyników</StyledNoResults>
        ) : (
          <Doughnut options={options} data={resultChart(data.spending)} />
        )}
      </StyledChartContainer>
      <StyledLegendContainer>
        {data.spending &&
          data.spending.map((element) => {
            return (
              <StyledListElement
                key={element.categoryId}
                color={element.categoryColor}
              >
                {element.categoryName}
              </StyledListElement>
            );
          })}
      </StyledLegendContainer>
    </StyledChartSection>
  );
}
