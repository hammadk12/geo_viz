import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='font-walsheim flex flex-col pb-4'>
        <p className='text-8xl mb-4'>GeoViz</p>
        <p className='ml-2'>Customer Demographic Analysis: Analyzing demographic trends from online retail orders to provide analytics and insights to evaluate the current business performance and suggest metrics for expansion. Tableau dashboard can be found <Link href='/' className='underline'>here</Link>.</p>
        
    </div>
  )
}

export default Hero