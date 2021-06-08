import {Bar} from 'react-chartjs-2';

const LineChart = () => {
    return ( 
        <>
        <Bar 
        data={{
            labels: ['06', '07', '08', '09', '10', '11','12', '13', '14', '15','16', '17', '18'],
            datasets: [{
                label: 'New Clients',
                data: [300,400,450,600,350,300,400,450,600,350,400,450,600,350],
                backgroundColor:  'rgba(77, 175, 124, 1)',
                barThickness: 20,
                borderRadius: 12,
            }]
        }}

        options={{
            plugins: {
                tooltips: {
                    callbacks: {
                        label: function(toolTipItem){
                            return (toolTipItem.value + "K")
                        }
                    }
                },
                title: {
                    display: false,
                    text: 'Custom Chart Title'
                }
            },
            scales: {
                yAxes: [
                    {
                        gridLines: {
                          color: ' white',
                        },
                        ticks: {
                            beginAtzero: true
                        }
                    }
                ]
            }
        }}
        >

        </Bar>
        </>
     );
}
 
export default LineChart;