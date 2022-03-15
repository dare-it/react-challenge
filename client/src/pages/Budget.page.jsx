import React from 'react';

import {
  ActionHeader,
  Card,
  Page,
  Button,
  Money,
  LocalizedDate,
  CategoryCell,
  ContentManagement,
  AddNewBudgetRecord,
} from 'ui';
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BudgetService, CategoryService } from 'api';
import { theme } from 'theme';
import { BUDGET_QUERY, CATEGORIES_QUERY } from 'queryKeys';
import { useModal } from '../hooks/useModal';
import { useQuery } from 'react-query';

const headers = [
  {
    id: 'category',
    label: 'Nazwa',
    renderCell: (params) => (
      <CategoryCell
        color={theme.palette.background.blue}
        name={params.category.name}
      />
    ),
  },
  {
    id: 'firstName',
    label: 'Planowane wydatki',
    renderCell: (params) => <Money inCents={params.amountInCents} />,
  },
  {
    id: 'currentSpending',
    label: 'Obecna kwota',
    renderCell: (params) => (
      <Money
        inCents={params.currentSpending}
        style={theme.palette.background.blue}
      />
    ),
  },
  {
    id: 'age',
    label: 'Status',
    renderCell: (params) => {
      let status = 'W normie';
      if (params.amountInCents < params.currentSpending)
        status = 'Przekroczone';
      else if (params.amountInCents === params.currentSpending)
        status = 'Wykorzystany';

      return status;
    },
  },
  {
    id: 'fullName',
    label: 'Data utworzenia',
    renderCell: (params) => <LocalizedDate date={params.createdAt} />,
  },
];

export const BudgetPage = () => {
  const [open, handleOpen, handleClose] = useModal();

  const {data} = useQuery(CATEGORIES_QUERY,  () => CategoryService.findAll(true) )

  return (
    <Page title="Budżet">
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
                onClick={handleOpen}
              >
                Zdefiniuj budżet
              </Button>
            )}
          />
        }
        style={{ minHeight: '687px', display: 'flex', flexDirection: 'column' }}
      >
        <Grid
          container
          style={{
            display: 'flex',
            flex: '1',
          }}
        >
          <Grid item xs={12}>
            <ContentManagement
              headers={headers}
              queryName={[BUDGET_QUERY, CATEGORIES_QUERY]}
              getDataEndpoint={BudgetService.findAll}
              removeDataEndpoint={BudgetService.remove}
            />
          </Grid>
        </Grid>
      </Card>
      <AddNewBudgetRecord open={open} data={data} onClose={handleClose} />
    </Page>
  );
};
