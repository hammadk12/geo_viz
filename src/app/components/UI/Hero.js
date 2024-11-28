import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='font-walsheim flex flex-col pb-4'>
        <p className='text-6xl mb-12'>TATA - Business Performance Analysis</p>
        <p className='text-xl md:text-3xl lg:text-4xl ml-2 mb-2'>Project Background</p>
        <p className='ml-2 mb-10 text-md md:text-md lg:text-lg'>TATA, a global e-commercy company founded in 2022, specializes in selling clothing, household items, and gifts. I'm partnering with the CMO to extract insights and deliver recommendations to improve performance across sales, product, and marketing teams.</p>
    <div className='font-walsheim'>
      <p className='text-xl md:text-3xl lg:text-4xl ml-2 mb-2'>Executive Summary</p>
      <p className='ml-2 mb-10 text-md md:text-md lg:text-lg'>TATA's sales analysis of over 800,000 orders across 2023 shows annual revenue stabilizing at around $9.7 million, with North America, Europe, and Asia contributing to 80% of sales. Gifts and baking items contribute to 60% of revenue, but the selection of products is a concern, as unsold items are estimated to negatively impact sales and revenue by 25%. TATA can benefit from optimizing their product portfolio, leveraging marketing strategies, and automating operations. Targeted growth in LATAM and Africa, along with improvements to digital channels like the mobile application, will strengthen TATA's market position and drive sustainable growth. </p>
      <Image src='/images/edr.png' width={700} height={20} alt='EDR' className='mx-auto mb-2'/>
      <p className='text-center border-b-2 pb-10'>TATA Dataset EDR</p>
    </div>
    
    </div>
  )
}

export default Hero