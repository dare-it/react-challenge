import React from 'react';
import { Error, NoContent, Loader, Table, Money, LocalizedDate, CategoryCell } from 'ui';
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { Box } from '@mui/material';
import { BudgetService } from 'api';
import { theme } from 'theme'

const headers = [
    { id: 'category', label: 'Nazwa',  renderCell: (params) => <CategoryCell color={theme.palette.background.blue} name= {params.category.name} />},
    { id: 'firstName', label: 'Planowane wydatki', renderCell: (params) => <Money inCents={params.amountInCents} />},
    { id: 'currentSpending', label: 'Obecna kwota', renderCell: (params) => <Money inCents={params.currentSpending} />},
    {
      id: 'age',
      label: 'Status',
      renderCell: (params) => {
        let status = 'W normie'
        if (params.amountInCents < params.currentSpending) status = 'Przekroczone'
        else if (params.amountInCents === params.currentSpending) status = 'Wykorzystany'
  
        return status
      }
    },
    { id: 'fullName', label: 'Data utworzenia', renderCell: (params) => <LocalizedDate date={params.createdAt}/>},
  ];

export const BudgetContent = () => {

    const { isLoading, error, data } = useQuery('budget', BudgetService.findAll)
  
    const queryClient = useQueryClient()
    const mutation = useMutation( BudgetService.remove , {
      onSuccess: () => queryClient.invalidateQueries('budget')
    })
    
    if (isLoading) return <Box  sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
      }}> 
        <Loader />
      </Box>
    if (error) return <Error />
    if (data && data.length === 0) return <NoContent />
    
    return <Table headCells={headers} rows={data} getUniqueId={(element) => element.id} deleteRecords={(id) => mutation.mutate({ids: id})}/>
}