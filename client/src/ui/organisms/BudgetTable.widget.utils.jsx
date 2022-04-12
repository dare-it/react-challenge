import { CategoryCell, LocalizedDate, Money } from 'ui';

const getAmountStatus = (row) => {
  const status = row.amountInCents - row.currentSpending;
  // eslint-disable-next-line no-nested-ternary
  if (status < 0) return 'Przekroczone';
  if (status > 0) return 'W normie';
  return 'Wykorzystany';
};

export const budgetHeadCells = [
  {
    id: 'category-name',
    label: 'Nazwa',
    renderCell: (row) => (
      <CategoryCell color={row.category.color} name={row.category.name} />
    ),
  },
  {
    id: 'planned-amount',
    label: 'Planowane wydatki',
    renderCell: (row) => <Money inCents={row.amountInCents} />,
  },
  {
    id: 'current-amount',
    label: 'Obecna kwota',
    renderCell: (row) => <Money inCents={row.currentSpending} />,
  },
  {
    id: 'status',
    label: 'Status',
    renderCell: (row) => getAmountStatus(row),
  },
  {
    id: 'creation-date',
    label: 'Data utworzenia',
    renderCell: (row) => <LocalizedDate date={row.createdAt} />,
  },
];

export const getUniqueId = (row) => row.id;
