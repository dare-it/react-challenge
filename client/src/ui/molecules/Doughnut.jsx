/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable unicorn/consistent-destructuring */
import { Box, Stack } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
// import PropTypes from 'prop-types';
import { Doughnut as ChartDoughnut } from 'react-chartjs-2';
import { CategoryCell, Error } from 'ui';
import { formatCentsToDollars } from 'utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartLegend = ({ labelsData }) => (
  <Stack sx={{ paddingTop: '1rem' }}>
    {labelsData.map((el) => (
      <CategoryCell name={el[0]} color={el[1]} key={el[0]} />
    ))}
  </Stack>
);

export const Doughnut = ({ data }) => {
  const labelsData = data.chartData.labels.map((label, index) => [
    label,
    data.chartData.datasets[0].backgroundColor[index],
  ]);

  const options = {
    layout: {
      padding: {
        bottom: 5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label(context) {
            const label = formatCentsToDollars(parseFloat(context.parsed));
            return ` ${label}`;
          },
        },
      },
    },
  };

  const areChartElements = data.chartData.labels.length > 0;
  return (
    <Box>
      {areChartElements ? (
        <>
          <ChartDoughnut
            data={data.chartData}
            options={options}
            width={100}
            height={100}
          />
          <ChartLegend labelsData={labelsData} />{' '}
        </>
      ) : (
        <Error error={{ text: 'Brak wyników' }} />
      )}
    </Box>
  );
};

// Doughnut.propTypes = {};
