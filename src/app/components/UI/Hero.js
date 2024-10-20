import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='font-walsheim flex flex-col pb-10'>
        <p className='text-8xl mb-4'>GeoViz</p>
        <p className='ml-2'>Customer Demographic Analysis: Analyzing demographic trends from ____ to ____. Tableau dashboard can be found <Link href='/'>here.</Link></p>
        
    </div>
  )
}

export default Hero