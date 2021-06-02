import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';

const SimpleBarChart = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData ({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgb(106, 90, 205)',
                        'rgb(106, 90, 205)',
                        'rgb(106, 90, 205)',
                        'rgb(106, 90, 205)',
                    ],
                }
            ]
        })
    }

    useEffect (() => {
        chart()
    }, [])
    return ( 
        <Bar data={chartData} height={400} width={900}/>
     );
}
 
export default SimpleBarChart;