"use client"
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const RevenueChart = () => {
    useEffect(() => {
        const chartDom1 = document.getElementById('chart')
        const myChart1 = echarts.init(chartDom1);

        myChart1.showLoading();

        // Fetch metrics.json file
        fetch('/data/metrics.json')
            .then((res) => res.json())
            .then((metrics) => {
                myChart1.hideLoading();

                const revenueData = [['Country', 'TotalRevenue']];

            metrics.revenue_per_location.forEach((entry) => {
                revenueData.push([entry.Country, entry.TotalRevenue])
            })

        // Define ECharts option
        const option = {
            dataset: {
                source: revenueData
            },
            grid: { containLabel: false },
            xAxis: { name: 'Total Revenue' },
            yAxis: { type: 'category' },
            textStyle: {
                color: 'black',
                
            },
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: 500,
                max: Math.max(...metrics.revenue_per_location.map(e => e.TotalRevenue)),
                text: ['High', 'Low'],
                dimension: 1,
                inRange: {
                    color: ['lightblue', 'yellow', 'orangered']
                },
                textStyle: {
                  color: 'black',
                  
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        x: 'TotalRevenue',
                        y: 'Country'
                    }
                }
            ]
        };

        myChart1.setOption(option)
    })
})

  return (
    <div id='chart' style={{ width: '100%', height: '900px' }}></div>
  )
};

export default RevenueChart