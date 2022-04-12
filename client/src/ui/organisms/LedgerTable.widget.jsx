import { useDeleteLedger, useLedgers } from 'hooks';

import { getUniqueId, ledgerHeadCells } from './LedgerTable.widget.utils';
import { TableWidget } from './Table.widget';

export const LedgerTableWidget = () => {
  const tableConfig = {
    getDataHook: useLedgers,
    deleteDataHook: useDeleteLedger,
    tableHeadCells: ledgerHeadCells,
    getUniqueId,
  };
  return <TableWidget tableConfig={tableConfig} />;
};
