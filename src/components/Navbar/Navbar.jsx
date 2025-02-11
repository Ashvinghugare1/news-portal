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
        className="border rounded py-2 px-4 mr-4"
      />
    </div>
    <div className="flex items-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <span className='text-3xl'><TbMessage /></span>
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-800">
        <span className='text-3xl'><VscBellDot /></span>
      </a>
      <img
        src={Ellipse} // Replace with actual user image
        alt="User Avatar"
        className="rounded-full w-10 h-10"
      />
    </div>
  </nav>

  )
}
