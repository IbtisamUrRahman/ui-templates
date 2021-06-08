import React from 'react';
import BarChart from '../../components/chart/BarChart';
import DoughnutChart from '../../components/chart/DoughnutChart';
import LineChart from '../../components/chart/LineChart';
import RadarChart from '../../components/chart/BubbleChart';
// import PolarChart from '../../components/chart/PolarChart';


const Chart = () => {
    return ( 
        <>
        <div className="m-5">
            <div className="relative h-42 w-full">
         
                 <BarChart/>
            
            </div>
            <DoughnutChart/>
            <LineChart/>
            <RadarChart/>
            {/* <PolarChart/> */}
        </div>
        </>
     );
}
 
export default Chart;