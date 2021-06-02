import React, {useEffect, useState} from 'react';
import {Polar} from 'react-chartjs-2';

const PolarChart = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData ({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgb(0, 0, 255, 0.4)',
                        'rgb(0, 0, 255, 0.4)',
                        'rgb(0, 0, 255, 0.4)',
                        'rgb(0, 0, 255, 0.4)',
                        'rgb(0, 0, 255, 0.4)'
                    ],
                },
                {
                    label: 'level of laziness',
                    data: [69, 76, 12,45],
                    backgroundColor: [
                        'rgb(192,192,192)',
                        'rgb(192,192,192)',
                        'rgb(192,192,192)',
                        'rgb(192,192,192)',
                        'rgb(192,192,192)'
                    ],
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
        <Polar data={chartData} height={400} width={900}/>
     );
}
 
export default PolarChart;