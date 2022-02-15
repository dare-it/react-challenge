import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Error, Loader, NoContent, LocalizedDate, Money, Table } from 'ui';
import { BudgetService } from '../../api/services/BudgetService';

export function BudgetPageContent() {

  const queryClient = useQueryClient();
  const query = useQuery('tableData', () => BudgetService.findAll());

  const { status, data, error } = query;
  const [info, setInfo] = useState();
  const [heads, setHeads] = useState();

  useEffect(() => {
    if (!info && data) {
      setInfo([...data])
    }
  }, [info, data]);


  useEffect(() => {
    const labels = ['Nazwa', 'Planowane wydatki', 'Obecna kwota', 'Status', 'Data utworzenia'];

    if (!heads && info) {
      const tempHeads = labels.map((label, i) => {
        return {
          id: labels[i],
          label: labels[i],
          renderCell: (row) => {
            switch (label) {
              case 'Planowane wydatki':
                return (<Money inCents={row.amountInCents} />);
              case 'Obecna kwota':
                return (<Money inCents={row.currentSpending} />);
              case 'Status':
                if (row.amountInCents - row.currentSpending > 0) {
                  return 'W normie'
                } else if (row.amountInCents - row.currentSpending === 0) {
                  return 'Wykorzystano'
                } else if (row.amountInCents - row.currentSpending < 0) {
                  return 'Przekroczono'
                } else {
                  return 'Wystąpił błąd'
                }
              case 'Data utworzenia':
                return (<LocalizedDate date={row.createdAt} />);
              case 'Nazwa':
                return (row.category.name);
              default:
                return 'Brak danych';
            }
          },
        }
      })
      setHeads(tempHeads);
    }
  }, [heads, info])

  const mutation = useMutation(
    (ids) => {
      BudgetService.remove({ ids })
        .then(() => queryClient.invalidateQueries('tableData'));
    }
  );

  const deleteRecords = id => {
    mutation.mutate(id);
  }

  if (status === 'loading') {
    return <Loader />;
  } else if (data && data.length === 0) {
    return <NoContent />;
  } else if (data && data.length > 0 && heads) {
    return <Table headCells={heads} rows={data} deleteRecords={(ids) => deleteRecords(ids)} getUniqueId={(row) => row.id}></Table>
  } else if (error) {
    return <Error />
  } else {
    return <Error />
  }
}
