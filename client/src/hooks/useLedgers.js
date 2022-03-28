import { LedgerService } from 'api';
import { LEDGER_QUERY } from 'queryKeys';
import { useQuery } from 'react-query';

const getLedgers = LedgerService.findAll;

export const useLedgers = () => useQuery(LEDGER_QUERY, getLedgers);
