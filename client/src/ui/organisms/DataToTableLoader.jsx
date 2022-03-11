import {useQueryClient, useQuery, useMutation} from 'react-query'

import { Table } from '../molecules/table/Table.jsx';
import { CategoryCell } from '../molecules/CategoryCell.jsx';
import {LocalizedDate} from '../atoms/LocalizedDate.jsx';
import { Money } from '../atoms/Money.jsx';
import { Error } from '../atoms/Error.jsx';
import { NoContent } from '../atoms/NoContent.jsx';
import { Loader } from '../atoms/Loader.jsx';
import { BudgetService } from 'api/index.js';

const BUDGET_QUERY = 'http://localhost:4320/budget';

export function DataToTableLoader() {

const querryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(BUDGET_QUERY, () => BudgetService.findAll())


const mutation = useMutation((ids) => BudgetService.remove({ids}), {
        onSuccess: async () => {
            await querryClient.refetchQueries([BUDGET_QUERY])
        }
    })
        
const deleteRecords = (ids) => mutation.mutate(ids);

  const headCells = [
    {
      id: 'name',
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell color = {row.category?.color} name = {row.category?.name} />
      )
    },
    {
      id: 'amount',
      label: 'Planowane wydatki',
      renderCell: (row) => (
        <Money inCents={row.amountInCents} />
      )
    },
    {
      id: 'current-amount',
      label: 'Obecna kwota',
      renderCell: (row) => (
        <Money inCents={row.currentSpending} />
      )
    },
    {
      id: 'status',
      label: 'Status',
      renderCell: (row) => {
        if (row.currentSpending === row.amountInCents) return 'Wykorzystany';
        if (row.currentSpending > row.amountInCents) return 'Przekroczone';
        if (row.currentSpending < row.amountInCents) return 'W normie';
      
      }
    },
    {
      id: 'date',
      label: 'Data utworzenia',
      renderCell: (row) => (
        <LocalizedDate date={row.createdAt} />
      )
    },
  ];

  if (isLoading) return <Loader />;

  if (error) return <Error error={error}/>

  if (!data?.length) return <NoContent/>

    
    return <Table
        headCells={headCells}
        rows={data}
        getUniqueId={(row) => row.id}
        deleteRecords={deleteRecords} />

 
}
