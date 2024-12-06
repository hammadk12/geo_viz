"use client"
import React from 'react'
import Image from 'next/image'
import Tableau from './Tableau'
import Performance from './Performance'

const Inisghts = () => {
  return (
    <div className='font-walsheim bg-white rounded-2xl p-10 text-black'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl mb-10'>Insights Deep-Dive</h3>
        <p className='text-lg md:text-2xl lg:text-3xl mb-4'>Sales Trends and Growth Rates</p>
        
        <li className='ml-4 text-lg'>TATA brought in $8.6 million in annual sales with over 800,000 orders in 2023.</li>
        <li className='ml-4 text-lg'>Sales surged later in the year due to the holidays but declined by 84% in December compared to previous months sales.</li>
        <li className='ml-4 text-lg'>TATA shows seasonality, with peak sales in October and November and lower sales in January and February.</li>
        <li className='ml-4 text-lg'>North America, Europe, and Asia contribute to 80% of sales, with the U.K alone accounting for 50%.</li>
        <li className='ml-4 mb-10 text-lg'>Africa and South America experienced a 10% growth in 2023 but have remained volatile.</li>
        <p className='text-md md:text-xl lg:text-2xl mb-2 text-center'>Sales Trends and Growth Rates</p>
        <Image src='/images/monthly_summary_FINAL.jpg' width={800} height={40} className='mb-20 mx-auto'/>
        <Tableau />
        <p className='text-center font-bold font-walsheim mt-20'>Sales Growth %</p>
        <Image src='/images/sales_growth.png' width={1800} height={140} className='mb-20' />
        <p className='text-center font-bold font-walsheim'>Order Count Growth %</p>
        <Image src='/images/order_growth.png' width={1800} height={140} className='mb-[100px]'/>
        <Performance />
        <Image src='/images/product_performance.png' width={1700} height={140}/>
    </div>
  )
}

export default Inisghts