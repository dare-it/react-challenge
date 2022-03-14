import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Loader } from 'ui/atoms/Loader';
import { Error } from 'ui/atoms/Error';
import { NoContent } from 'ui/atoms/NoContent';
import { LedgerService } from 'api';
import { LEDGER_QUERY } from 'queryKeys';
import { Table } from 'ui/molecules/table/Table';
import { CategoryCell } from 'ui/molecules/CategoryCell';
import { Money } from 'ui/atoms/Money';
import { LocalizedDate } from 'ui/atoms/LocalizedDate';
import { ActionHeader, Card } from 'ui';
import { Button } from 'ui/atoms/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
import { AddNewLedgerRecord } from './AddNewLedgerRecord.modal';


export const LedgerWidget = () => {

  const [modalVisible, toggleModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(LEDGER_QUERY, () =>
    LedgerService.findAll(),
  );

  const mutation = useMutation((ids) => LedgerService.remove({ ids }), {
    onSuccess: async () => {
      await queryClient.refetchQueries([LEDGER_QUERY]);
    },
  });

  const deleteRecords = (ids) => mutation.mutate(ids);

  const openModal = (modalType) => {
    toggleModal(true);
    setModalType(modalType);
  }

  const tableDefinition = [
    {
      id: 'title',
      label: 'Nazwa',
      renderCell: (row) => (
        <CategoryCell name={row.title} />
      ),
    },
    {
      id: 'category',
      label: 'Kategoria',
      renderCell: (row) => (
        <CategoryCell color={row.category?.color} name={row.category?.name} />
      ),
    },
    {
      id: 'amountInCents',
      label: 'Kwota',
      renderCell: (row) => {
        if (row.mode === "INCOME") return <><text style={{ color: "green" }}>+<Money inCents={row.amountInCents} /></text></>;
        if (row.mode === "EXPENSE") return <><text style={{ color: "red" }}>-<Money inCents={row.amountInCents} /></text></>;
      }
    },
    {
      id: 'createdAt',
      label: 'Data',
      renderCell: (row) => <LocalizedDate date={row.createdAt} />,
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (!data?.length) {
    return <NoContent />;
  }

  return (
    <>
      <Card
        title={
          <ActionHeader
            variant={'h1'}
            title="Portfel"
            renderActions={() => (
              <Box>
                <Button sx={{ marginRight: '8px' }} onClick={() => openModal('INCOME')} startIcon={<AddIcon />}>Wpłać</Button>
                <Button onClick={() => openModal('EXPENSE')} startIcon={<RemoveIcon />} >Wypłać</Button>
              </Box>
            )}
          />
        }
      >
        <Table rows={data}
          headCells={tableDefinition}
          getUniqueId={(row) => row.id}
          deleteRecords={deleteRecords}
        />
      </Card>

      <AddNewLedgerRecord
        open={modalVisible}
        onClose={() => toggleModal(false)}
        type={modalType}
      >
      </AddNewLedgerRecord>
    </>
  );
};
