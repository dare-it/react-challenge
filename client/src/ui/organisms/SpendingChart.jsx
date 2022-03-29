import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import {Loader, Error, NoContent, Money, ActionHeader, Card, CategoryCell} from 'ui';
import { SummaryService } from 'api';
import { SUMMARY_QUERY } from 'queryKeys';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CardContent } from '@mui/material';


export const SpendingChart = () =>{

    
    const [legend, setLegend] = useState();
    const[ref, setRef] = useState();

    const onRefChange = useCallback(node => {
        setRef(node);
        if (node !== null) {
            console.log(node);
            setLegend(node.chartInstance.generateLegend());
        }
     
    }, []); 

    const queryClient = useQueryClient() 
    
    const {isLoading, isError, data, error} = useQuery(SUMMARY_QUERY, () => 
        SummaryService.findAll()
    );


    if (isLoading) return <Loader></Loader>;
    if (isError) return <Error error={error}></Error>;
    if (data.length === 0) {
    return <NoContent></NoContent>;
    }

       
    ChartJS.register(ArcElement, Tooltip, Legend);
    
    console.log(data)
    const res = data
    console.log('Saldo' + res.balance)
    const balance = res.balance
    const labels = []; 
    const amount=[];
    const backgroundColor=[];
    res.spending.map((spendingElement)=>{
        labels.push(spendingElement.categoryName)
        amount.push(spendingElement.amountInCents)
        backgroundColor.push(spendingElement.categoryColor)
    })
    
    const options = {
        plugins: {
            legend: {
                display: false,
                textAlgin: 'left',
                position: 'bottom',
                align: 'start',
                maxWidth: '50px',                      
                      
                labels: {
                    usePointStyle: true,
                    font: {
                        size: '20px',
                    },
                    
            
                },
                    
            },
            
     
        legendCallback: (chartInstance) => {
                let labels = chartInstance.dataChart.labels;
                let colors = chartInstance.dataChart.dataset[0].backgroundColor
            
                return (
                        <ul>
                            {labels&&labels.map((label, index)=> (
                            <li>
                                <div style= {{backgroundColor: colors[index]}}>
                                   {labels&&<div>{labels[index]}</div>}
                                </div>
                            </li>
                               
                            ))}
            
                        </ul>
                );
            }, 
        },       
        
    } 

    const dataChart = {
        labels,
        datasets: [
            {
                label: 'spending',
                data: amount,
                backgroundColor: backgroundColor,
            },
        ],
        
    }

   return (
       <Card  title ={
                <ActionHeader
                    variant={'h3'}
                    title='Saldo'
                    renderActions={() => (
                        <Money inCents={balance} />
                )}
                >  
                </ActionHeader>
    
            } subheader ='Pozostała Kwota'
        >
            
        <CardContent>
            
            <Doughnut data={dataChart} options={options} /> {/* {legend} ref={onRefChange} */}

            {

                labels.map((el, i) =>
                <CategoryCell name={el} color={backgroundColor[i]} />
                )
            }
            
            
        </CardContent>
       </Card>
    
   

    )

};