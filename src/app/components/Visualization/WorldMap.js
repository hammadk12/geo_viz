"use client"
import * as echarts from 'echarts';
import { useEffect } from 'react';

const WorldMap = () => {
  useEffect(() => {
    const chartDom = document.getElementById('map');
    const myChart = echarts.init(chartDom);

    myChart.showLoading();
     // Fetch both the World GeoJSON and metrics.json
     Promise.all([
      fetch('/data/world.json').then((res) => res.json()),  // Path to your World GeoJSON file
      fetch('/data/metrics.json').then((res) => res.json()) // Path to your metrics JSON file
    ]).then(([geoJson, metrics]) => {
      myChart.hideLoading();

      // Register the world map with ECharts
      echarts.registerMap('world', geoJson);

      
      // Prepare data for visualization (e.g., order counts per location)
      const orderData = Object.entries(metrics.order_count_per_location).map(
        ([location, value]) => ({ name: location, value: value || 0 })
      );

        // Define chart options
      const option = {
        title: {
          text: 'Order Distribution by Country',
          subtext: '',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const value = params.value !== undefined ? params.value : 0;
            return `${params.name}<br/>${value} orders`;
          }
        },
        visualMap: {
          min: 0,
          max: 500000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: 'Orders',
            type: 'map',
            map: 'world', // Use the registered world map
            label: {
              show: false
            },
            data: orderData,  // Use order counts per country
          }
        ]
      };

      // Set chart options
      myChart.setOption(option);
    });
  })

  return (
    <div id='map' style={{ width: '100%', height: '600px' }} className='font-walsheim'>
        
    </div>
  )
}

export default WorldMap;