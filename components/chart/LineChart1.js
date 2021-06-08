import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

const LineChart1 = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData ({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            title: {
                display: false,
            },
            datasets: [
                {
                    data: [32, 45, 25, 76, 69],
                    backgroundColor: [
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                    ],
                    borderRadius: 10,
                  
                }
            ],
            options: [
                {
                    responsive: false,
                }
            ],
            legend: {
                labels: {
                    fontsize: 20,
                },
              
            }
        })
    }

    useEffect (() => {
        chart()
    }, [])
    return ( 
        <Line data={chartData} height={200} width={400}/>
     );
}
 
export default LineChart1;