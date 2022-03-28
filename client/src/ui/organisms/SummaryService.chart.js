import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { SummaryService } from '../../api';
import { Loader } from '../atoms/Loader';
import { Error } from '../atoms/Error';
import { NoContent } from '../atoms/NoContent';
import {
  StyledChartSection,
  StyledBalanceContainer,
  StyledChartContainer,
  StyledParagraphBalance,
  StyledLegendContainer,
  StyledListElement,
} from '../../styles/SummaryService.styles';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const { isLoading, error, data } = useQuery('chartData', () =>
    SummaryService.findAll(),
  );
  if (isLoading) return <Loader />;
  if (error) return <Error />;
  if (data.length === 0) return <NoContent />;

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
          <h3>Saldo</h3>
          <h3>{data.balance / 100} PLN</h3>
        </StyledBalanceContainer>
        <StyledParagraphBalance>Pozostala kwota</StyledParagraphBalance>
      </div>
      <StyledChartContainer>
        <Doughnut options={options} data={resultChart(data.spending)} />
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
