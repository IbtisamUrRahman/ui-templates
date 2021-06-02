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
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)',
                        'rgb(0, 0, 255)'
                    ],
                }
            ]
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