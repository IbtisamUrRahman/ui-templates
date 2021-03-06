import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';

const LineChart = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData ({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                        'rgb(60, 179, 113)',
                    ],
                    fill: true,
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
                devicePixelRatio: 10
            }
        })
    }

    useEffect (() => {
        chart()
    }, [])
    return ( 
        <Line data={chartData} height={400} width={900}/>
     );
}
 
export default LineChart;