import React from 'react'
import Image from 'next/image'

const Inisghts = () => {
  return (
    <div className='font-walsheim'>
        <h3 className='text-xl md:text-2xl lg:text-3xl mb-10'>Insights Deep-Dive</h3>
        <p className='text-md md:text-xl lg:text-2xl mb-4'>Sales Trends and Growth Rates</p>
        
        <li className='ml-4'>TATA brought in $8.6 million in annual sales with over 500,000 orders in 2023.</li>
        <li className='ml-4'>Sales surged in November 2023 but declined by 40% by April 2024, returning to just below average levels as the year progresses.</li>
        <li className='ml-4'>TATA shows seasonality, with peak sales in October and November and lower sales in January and February.</li>
        <li className='ml-4'>North America, Europe, and Asia contribute to 80% of sales, with the U.K alone accounting for 50%.</li>
        <li className='ml-4 mb-10'>Africa and South America experienced a 10% growth in 2023 but have remained volatile.</li>
        <p className='text-md md:text-xl lg:text-2xl mb-2'>Sales Trends and Growth Rates</p>
        <Image src='/images/monthly_summary1.jpg' width={800} height={40}/>
    </div>
  )
}

export default Inisghts