import React from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRounded from '@mui/icons-material/RemoveRounded';
import { ActionHeader, Button, Card, Error, Loader, NoContent, LocalizedDate, Money, Table, CategoryCell, AddNewLedgerRecord } from 'ui';
import { LedgerService } from '../../api/services/LedgerService';
import { Typography } from '@mui/material';
import { theme } from '../../theme';

export const LedgerWidget = () => {

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(null);

  const handleOpen = (e) => {
    setModalOpen(true);
    setModalType(e.target.dataset.type)
  };

  const handleClose = () => {
    setModalOpen(false)
    setModalType(null)
  };

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery('ledgerTableData', () => LedgerService.findAll());

  const mutation = useMutation(
    (ids) => {
      LedgerService.remove({ ids })
        .then(() => queryClient.invalidateQueries('ledgerTableData'));
    }
  );

  const deleteRecords = id => {
    mutation.mutate(id);
  }

  const getRecordMode = (record) => {
    if (record.mode === "INCOME") {
      return <Typography sx={{ fontSize: 'inherit', color: theme.palette.success.main }}>&#43;<Money inCents={record.amountInCents} /></Typography>;
    } else if (record.mode === "EXPENSE") {
      return <Typography sx={{ fontSize: 'inherit', color: theme.palette.error.main }}>&minus;<Money inCents={record.amountInCents} /></Typography>;
    } else {
      return <Money inCents={record.amountInCents} />;
    }
  }

  const columns = [
    { id: 'title', label: 'Nazwa', renderCell: (row) => <>{row.title}</>},
    { id: 'category', label: 'Kategoria', renderCell: (row) => <CategoryCell color={row.category?.color}  name={row.category?.name} /> },
    { id: 'created-at', label: 'Data', renderCell: (row) => <LocalizedDate date={row.createdAt} /> },
    { id: 'current-spending', label: 'Kwota', renderCell: (row) => getRecordMode(row) },
  ];

  return (
    <Card
      title={
        <ActionHeader
          variant={'h1'}
          title="Portfel"
          renderActions={() => <><Button
            variant="contained"
            color="primary"
            label="Wpłać"
            data-type={"INCOME"}
            onClick={handleOpen}
            startIcon={<AddRoundedIcon />} /><Button
              variant="contained"
              color="primary"
              label="Wypłać"
              data-type={"EXPENSE"}
              onClick={handleOpen}
              startIcon={<RemoveRounded />} /></>
          }
        />
      }
    >
      {isLoading && <Loader />}
      {error && <Error />}
      {data?.length === 0 && <NoContent />}
      {data?.length ? <Table headCells={columns}
        rows={data}
        deleteRecords={(ids) => deleteRecords(ids)}
        getUniqueId={(row) => row.id} /> : null}
      <AddNewLedgerRecord type={modalType} open={modalOpen} handleClose={handleClose} />
    </Card>
  );
};
