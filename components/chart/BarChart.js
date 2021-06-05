import React, {useEffect, useState} from 'react';
import styles from "./BarChart.module.css";
import {Bar} from 'react-chartjs-2';

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
                   
                    
                }
            ],
            options:  {
                    responsive: false,
                    layout: {
                        padding: {
                            left: 100,
                            right: 100,
                        }
                    }
                },
            
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
        // <canvas data={chartData} className={`${styles['chart']}`}></canvas>
       
            <Bar data={chartData} className={`${styles['Barchart']}`}/>
      
     );
}
 
export default LineChart;