import { Grid } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ActionHeader, Button, Card, Table } from 'ui';

export const LedgerWidget = () => {
  const tableDefinition = [
    { id: 'name', label: 'Nazwa', renderCell: (row) => {} },
    { id: 'category', label: 'Kategoria', renderCell: (row) => {} },
    { id: 'date', label: 'Data', renderCell: (row) => {} },
    { id: 'amount', label: 'Kwota', renderCell: (row) => {} },
  ];

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => (
            <>
              <Button text="Wpłać" variant="outlined" startIcon={<AddIcon />} />
              <Button
                text="Wypłać"
                variant="outlined"
                startIcon={<RemoveIcon />}
              />
            </>
          )}
        >
          <Grid container>
            <Grid item xs={12}>
              <Table headCells={tableDefinition}></Table>
            </Grid>
          </Grid>
        </ActionHeader>
      }
    />
  );
};
