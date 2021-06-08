import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart1 = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData ({


            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            },

            datasets: [
                {
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                    ],
                    borderColor: [
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                    ],
                    borderWidth: 2
                }
            ],
          
            legend: {
                labels: {
                    fontsize: 20,
                }
            }
        })
    }

    useEffect (() => {
        chart()
    }, [])
    return ( 
        <>
            
            <Doughnut data={chartData} height={800} width={800}
            />
           
        </>
     );
}
 
export default DoughnutChart1;