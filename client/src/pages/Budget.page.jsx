import React from 'react';
import {useQuery, useMutation, useQueryClient} from 'react-query';


import { ActionHeader, Card, Page } from 'ui';
import { Grid } from '@mui/material';
import { Button } from 'ui/atoms/Button';
import {Table} from '../ui/molecules/table/Table'
import AddIcon from '@mui/icons-material/Add';
import { BudgetService } from 'api/services/BudgetService';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { Loader } from 'ui/atoms/Loader';
import { CategoryCell } from 'ui/molecules/CategoryCell';
import {Money} from 'ui/atoms/Money'
import { LocalizedDate } from 'ui/atoms/LocalizedDate';

const columns = [
  {
    id: 'name',
    label: 'Nazwa',
    renderCell:
      (row) => <CategoryCell color={row.category.color} name={row.category.name}/>,
  },
  {
    id: 'planned-spending',
    label: 'Planowane wydatki',
    renderCell:
      (row) => <Money inCents={row.amountInCents} />,
  },
  {
    id: 'current-amount',
    label: 'Obecna kwota',
    renderCell:
      (row) => <Money inCents={row.currentSpending} />,
  },
  {
    id: 'status',
    label: 'Status',
    renderCell:
      (row) => {
        if (row.currentSpending === row.amountInCents) return 'Wykorzystany';
        if (row.currentSpending > row.amountInCents) return 'Przekroczone';
        if (row.currentSpending < row.amountInCents) return 'W normie';
      },
  },
  {
    id: 'creation-date',
    label: 'Data utworzenia',
    renderCell:
      (row) => <LocalizedDate date={row.createdAt} />,
  },
]

export const BudgetPage = () => {

  const { isLoading, isError, isSuccess , data: rows } = useQuery('budgetAll', () => BudgetService.findAll());

  const queryClient = useQueryClient();

  const mutation = useMutation((ids)=>BudgetService.remove({ids}), {
    onSuccess: () => queryClient.invalidateQueries('budgetAll')})

  return (
    <Page title="Budżet">
      <Card
          title={
            <ActionHeader
              variant={'h1'}
              title="Twój budżet"
              renderActions={() => <Button variant='contained' startIcon={<AddIcon/>}>Zdefiniuj budżet</Button>}
            />
          }
        >
      {isLoading && (<Loader/>)}
      {isError && (<Error error={'Wystąpił nieoczekiwany błąd'}/>)}
      {isSuccess && (
        <Grid container>
          <Grid item xs={12}>
            {(rows.length === 0)
              ? (<NoContent />)
              :
              <Table
              headCells={columns}
              rows={rows}
              getUniqueId={(rows) => rows.id}
              deleteRecords={(selected) => mutation.mutate(selected)}
              />
            }
          </Grid>
        </Grid>
        )
      }
      </Card>
    </Page>
  );
};
