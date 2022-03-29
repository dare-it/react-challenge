import { Box, Paper, Stack, Typography } from '@mui/material';
import { useBudgetForChart } from 'hooks';
import { HorizontalBar, Loader } from 'ui';

export const BudgetChart = () => {
  const { data, isLoading } = useBudgetForChart();
  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <Paper sx={{ p: 5, borderRadius: 2, marginBottom: '2rem' }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography component={'h4'} variant={'h4'}>
                Budżet
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ marginBottom: '45px' }}>
            <Typography variant={'subtitle1'}>Podsumowanie wydatków</Typography>
          </Box>
          <HorizontalBar data={data} />
        </Paper>
      )}
    </>
  );
};
