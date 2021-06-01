import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const DoughnutChart = () => {
    const data = {
        labels: ['jan', 'feb', 'march', 'april', 'may'],
        datasets: [
            {
                label: 'Sales for 2021 (M)',
                data: [3, 2, 2, 1, 2],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBorderColor: ['rgba(54, 162, 235, 0.2)'],
            },
            {
                label: 'Sales for 2020 (M)',
                data: [1, 2, 4, 3, 6],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBorderColor: ['rgba(255, 206, 86, 0.2)'],
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Visitor Activity',
            fontSize: 25
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 7,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    return ( 
        <div>
            <Doughnut data={data} options={options}/>
        </div>
     );
}
 
export default DoughnutChart;