import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import {
  ActionHeader,
  Card,
  Page,
  Table,
  Money,
  LocalizedDate,
  Loader,
  Error,
  NoContent,
  Button,
  CategoryCell,
  AddNewBudgetRecord,
} from 'ui';
import { BudgetService } from '../api/services/BudgetService';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { useShowSnackbar } from '../hooks/useShowSnackbar';

export const BudgetPage = () => {
  const [open, setOpen] = React.useState(false);
  const queryClient = useQueryClient();
  const showSnackbar = useShowSnackbar();

  const { isLoading, isError, data } = useQuery(
    BUDGET_QUERY,
    BudgetService.findAll,
  );

  const { mutate } = useMutation(BudgetService.remove, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(BUDGET_QUERY);
      await queryClient.invalidateQueries(CATEGORIES_QUERY);
      showSnackbar('Element został usunięty', 'success');
    },
    onError: () => {
      showSnackbar('Wystąpił nieoczekiwany błąd', 'error');
    },
  });

  const deleteRecords = (ids) => mutate({ ids });
  const getUniqueId = (row) => row?.id;

  const headCells = [
    {
      id: 0,
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell color={row.category.color} name={row.category.name} />
      ),
    },
    {
      id: 1,
      label: 'Planowane wydatki',
      renderCell: (row) => <Money inCents={row.amountInCents} />,
    },
    {
      id: 2,
      label: 'Obecna kwota',
      renderCell: (row) => <Money inCents={row.currentSpending} />,
    },
    {
      id: 3,
      label: 'Status',
      renderCell: (row) => {
        return row.currentSpending === row.amountInCents
          ? 'Wykorzystany'
          : row.currentSpending > row.amountInCents
          ? 'Przekroczone'
          : 'W normie';
      },
    },
    {
      id: 4,
      label: 'Data utworzenia',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
  ];

  return (
    <Page title="Budżet">
      <AddNewBudgetRecord open={open} close={() => setOpen(false)} />
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Budżet"
            renderActions={() => (
              <Button
                variant={'contained'}
                color={'primary'}
                startIcon={<AddIcon />}
                onClick={() => setOpen(true)}
              >
                Zdefiniuj budżet
              </Button>
            )}
          />
        }
      >
        <Grid container>
          <Grid item xs={12}>
            {isLoading && <Loader />}
            {isError && <Error />}
            {!isLoading && !isError && !data.length && <NoContent />}
            {!isLoading && !isError && !!data.length && (
              <Table
                headCells={headCells}
                rows={data}
                getUniqueId={getUniqueId}
                deleteRecords={deleteRecords}
              />
            )}
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};
