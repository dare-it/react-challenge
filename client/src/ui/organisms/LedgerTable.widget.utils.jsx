import { styled } from '@mui/material';
import { CategoryCell, LocalizedDate, Money } from 'ui';

const FormattedAmount = styled('span')(({ theme, mode }) => ({
  color:
    mode === 'INCOME' ? theme.palette.success.dark : theme.palette.error.main,
}));

const getFormattedAmount = (row) => {
  const sign = row.mode === 'EXPENSE' ? '-' : '+';
  return (
    <FormattedAmount mode={row.mode}>
      {sign}
      <Money inCents={row.amountInCents} fixed />
    </FormattedAmount>
  );
};

export const ledgerHeadCells = [
  {
    id: 'title',
    label: 'Nazwa',
    renderCell: (row) => row.title,
  },
  {
    id: 'category-name',
    label: 'Kategoria',
    renderCell: (row) => (
      <CategoryCell color={row.category.color} name={row.category.name} />
    ),
  },
  {
    id: 'date',
    label: 'Data',
    renderCell: (row) => <LocalizedDate date={row.createdAt} />,
  },
  {
    id: 'amount',
    label: 'Kwota',
    renderCell: (row) => getFormattedAmount(row),
  },
];

export const getUniqueId = (row) => row.id;
