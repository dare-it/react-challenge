import { Box, Paper, Stack, Typography } from '@mui/material';
import { useSummary } from 'hooks';
import { Doughnut, Loader, Money } from 'ui';

export const SummaryChart = () => {
  const { data, isLoading } = useSummary();
  return (
    <>
      {isLoading && <Loader />}
      {data && (
        // I thought about extra wrapper component here
        // but I didn't want to make it too complicated
        <Paper sx={{ p: 5, borderRadius: 2 }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography component={'h4'} variant={'h4'}>
                Saldo
              </Typography>
            </Box>
            <Box>
              <Typography component={'h3'} variant={'h3'}>
                <Money inCents={data.balance} />
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ marginBottom: '45px' }}>
            <Typography variant={'subtitle1'}>Pozostała kwota</Typography>
          </Box>
          <Doughnut data={data} />
        </Paper>
      )}
    </>
  );
};
