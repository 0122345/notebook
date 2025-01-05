import { FaHome } from 'react-icons/fa'
import React from 'react'

const SideBar = () => {
  return (
    <div className="flex justify-center w-[6dvw] h-dvh bg-black text-white">
       <FaHome size={30} className='hover:text-green-600 cursor-pointer'/>
    </div>
  )
}

export default SideBar
