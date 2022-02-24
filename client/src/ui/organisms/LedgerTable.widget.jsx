import React from 'react'
import { Table } from 'ui/molecules/table/Table';
import { LedgerService } from 'api';
import { LEDGER_QUERY } from 'queryKeys';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Loader, NoContent, Error, CategoryCell, LocalizedDate, Money } from 'ui';
import { Title } from 'ui/atoms/Title';
import { Box } from '@mui/material';

export const LedgerTableWidget = () => {
    const queryClient = useQueryClient();

    const { isLoading, data, error } = useQuery(LEDGER_QUERY, () => LedgerService.findAll());

    const mutation = useMutation((ids) =>
        LedgerService.remove({ ids }),
        {
            onSuccess: async () => {
                await queryClient.refetchQueries([LEDGER_QUERY]);
            }
        }

    )

    const deleteRecords = (ids) => mutation.mutate(ids);

    const tableDefinition = [
        {
            id: 'name',
            label: 'Nazwa',
            renderCell: (row) => (
                <Title title={row.title} />
            )

        },
        {
            id: 'category',
            label: 'Kategoria',
            renderCell: (row) =>
                (<CategoryCell color={row.category?.color} name={row.category?.name} />)

        },
        {
            id: 'date',
            label: 'Data',
            renderCell: (row) => (
                <LocalizedDate date={row.createdAt} />
            )
        },
        {
            id: 'amount',
            label: 'Kwota',
            renderCell: (row) => {
                if (row.mode !== 'INCOME')
                    return (<Box sx={{
                        color: '#FF5D5D'
                    }}>
                        - <Money inCents={row.amountInCents} />
                    </Box>)
                else return (<Box sx={{
                    color: '#00A980'
                }}>
                    + <Money inCents={row.amountInCents} />
                </Box>)
            }
        },
    ]

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Error error={error} />
    }

    if (!data?.length) {
        return <NoContent />
    }

    return (
        <Table
            rows={data}
            headCells={tableDefinition}
            getUniqueId={(row) => row.id}
            deleteRecords={deleteRecords}
        />
    )
}
