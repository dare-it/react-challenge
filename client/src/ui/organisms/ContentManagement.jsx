import React from 'react';
import { Error, NoContent, Loader, Table } from 'ui';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Box } from '@mui/material';

export const ContentManagement = ({
  queryName,
  getDataEndpoint,
  removeDataEndpoint,
  headers,
}) => {
  const { isLoading, error, data } = useQuery(queryName, getDataEndpoint);

  const queryClient = useQueryClient();
  const mutation = useMutation(removeDataEndpoint, {
    onSuccess: () => {[...queryName].forEach(query => queryClient.invalidateQueries(query))}
  });

  if (isLoading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Loader />
      </Box>
    );
  if (error) return <Error />;
  if (data && data.length === 0) return <NoContent />;

  return (
    <Table
      headCells={headers}
      rows={data}
      getUniqueId={(element) => element.id}
      deleteRecords={(id) => mutation.mutate({ ids: id })}
    />
  );
};
