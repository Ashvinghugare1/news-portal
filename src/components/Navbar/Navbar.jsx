import React from 'react'
import Ellipse from '../../assets/home/Ellipse.png'
import { VscBellDot } from "react-icons/vsc";
import { TbMessage } from "react-icons/tb";


export default function Navbar() {
  return (
    
    <nav className="bg-white shadow py-4 px-6 flex items-center justify-between">
    <div className="flex items-center">
      <input
        type="search"
        placeholder="Search"
        className="border rounded md:ml-0 ml-6 md:py-2 py-1 md:px-2 px-1 mr-4"
      />
    </div>
    <div className="flex items-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <span className='md:text-3xl text-2xl'><TbMessage /></span>
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <span className='md:text-3xl text-2xl'><VscBellDot /></span>
      </a>
      <img
        src={Ellipse} // Replace with actual user image
        alt="User Avatar"
        className="rounded-full md:w-10 md:h-10 w-8 h-8"
      />
    </div>
  </nav>

  )
}
