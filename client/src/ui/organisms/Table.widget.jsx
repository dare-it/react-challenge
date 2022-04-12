import { Error, Loader, NoContent, Table } from 'ui';

export const TableWidget = ({ tableConfig }) => {
  const { getDataHook, deleteDataHook, tableHeadCells, getUniqueId } =
    tableConfig;

  const { error, isLoading, isError, data } = getDataHook();

  const deleteData = deleteDataHook();

  const deleteRecords = (recordIds) => {
    deleteData.mutate(recordIds);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
      {data && data.length > 0 && (
        <Table
          rows={data}
          headCells={tableHeadCells}
          getUniqueId={getUniqueId}
          deleteRecords={deleteRecords}
        />
      )}
      {data && data.length === 0 && !isLoading && !isError && <NoContent />}
    </>
  );
};
