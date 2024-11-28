import React from 'react'
import { Earth } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='p-6 border-b border-gray-600 mb-12 flex gap-x-2 items-center'>
         <Earth  />
         <h2 className="text-md lg:text-lg font-bold font-walsheim">TATA</h2>
    </div>
  )
}

export default Navbar