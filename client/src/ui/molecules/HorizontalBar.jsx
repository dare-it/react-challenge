import { Box } from '@mui/material';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Error } from 'ui';

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
  aspectRatio: 1.5,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label(context) {
          const label = context.formattedValue;
          return ` ${label} %`;
        },
        title() {
          return null;
        },
      },
    },
  },
};

export const HorizontalBar = ({ data }) => {
  const areLedgers = data.chartData.datasets[0].data.every((el) => el !== 0);
  const areChartElements = data.chartData.labels.length > 0;

  return (
    <Box>
      {areChartElements && areLedgers ? (
        <Bar options={options} data={data.chartData} />
      ) : (
        <Error error={{ text: 'Brak wyników' }} />
      )}
    </Box>
  );
};
