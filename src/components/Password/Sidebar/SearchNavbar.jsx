import React from 'react'
import  profileIcon from '../../../assets/searchBarIcon/Ellipse.png'
import bellIcon from '../../../assets/searchBarIcon/bellIcon.png'
import message from '../../../assets/searchBarIcon/messageIcon.png'

const SearchNavbar = () => {
  return (
        <div className='w-[83%] p-3 px-6 shadow-lg fixed top-0 bg-white'>
            <div className='flex justify-between z-50'>
                <input type="text" placeholder='Search' className='border border-gray-200 rounded px-3 py-1 w-[35%]'/>
                <div className='flex items-center'>
                    <span><img src={message} alt="" /></span>
                    <span><img src={bellIcon} alt="" className='px-3'/></span>
                    <span><img src={profileIcon} alt="" className='w-8'/></span>
                </div>
            </div>
        </div>
)
}

export default SearchNavbar