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
      fetch('/data/world1.json').then((res) => res.json()),  // Path to your World GeoJSON file
      fetch('/data/metrics.json').then((res) => res.json()) // Path to your metrics JSON file
    ]).then(([geoJson, metrics]) => {
      myChart.hideLoading();

      // Register the world map with ECharts
      echarts.registerMap('world', geoJson);

      
      // Prepare data for visualization 
      const orderData = Object.entries(metrics.order_count_per_location).map(
        ([location, value]) => ({ name: location, value: value || 0 })
      );

        // Define chart options
      const option = {
        title: {
          text: 'Order Distribution by Country',
          left: 'center',
          textStyle: {
            color: '#000000',
            fontFamily: 'GT Walsheim, sans-serif',
            fontSize: 25
        },
      },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const value = params.value !== undefined && !isNaN(params.value) ? params.value : 0;
            return `${params.name}<br/>${value} orders`;
          }
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: true },
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 0,
          max: Math.max(...Object.values(metrics.order_count_per_location)),
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          top: 'center',
          inRange: {
            color: ['lightblue', 'yellow', 'orangered']
          },
          textStyle: {
            color: '#000000',
            
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