import React, {useEffect, useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import styles from '../chart/chart.module.css';

const DoughnutChart = () => {
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData ({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
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
                }
            }
        })
    }

    useEffect (() => {
        chart()
    }, [])
    return ( 
        <div>
            <Doughnut id="chart" className={styles.chart} data={chartData}/>
        </div>
     );
}
 
export default DoughnutChart;