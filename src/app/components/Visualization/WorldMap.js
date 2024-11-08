"use client"
import { useEffect } from 'react';
import * as echarts from 'echarts';

const WorldMap = () => {
  useEffect(() => {
    const chartDom = document.getElementById('map');
    const myChart = echarts.init(chartDom);

    // Define chart
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25]
        }
      ]
    };

    // Render chart
    myChart.setOption(option);
  })

  return (
    <div id='map' style={{ width: '100%', height: '600px' }} className='font-walsheim'>WorldMap
        
    </div>
  )
}

export default WorldMap