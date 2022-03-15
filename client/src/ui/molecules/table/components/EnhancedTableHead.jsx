import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const EnhancedTableHead = ({
  onSelectAllClick,
  numSelected,
  rowCount,
  headCells,
}) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
        />
      </TableCell>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={'left'}
          padding={headCell.disablePadding ? 'none' : 'normal'}
        >
          {headCell.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);
