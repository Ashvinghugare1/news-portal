import React, { useState } from 'react'
import Ellipse from '../../assets/home/Ellipse.png'
import { GrNewWindow } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { LuFolderCog } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";
import {RiArrowDropDownLine} from "react-icons/ri";





export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // New state for Settings dropdown

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-2 z-50 bg-blue-950 text-white p-1 rounded shadow"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
      </button>

      <aside
        className={`bg-blue-950 text-white w-64 min-h-screen py-6 px-3 fixed top-0 left-0 z-40 transition-transform duration-300 transform md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-40">
          {/* Logo or Branding Here (if any) */}
        </div>

        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
            >
              <span>
                <MdDashboard />
              </span>
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
            >
              <span>
                <GrNewWindow />
              </span>
              New
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
            >
              <span>
                <LuFolderCog />
              </span>
              Management
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
            >
              <span>
                <FaRegUser />
              </span>
              Profile
            </a>
          </li>
          <li className="mb-2">
            <button // Changed to a button
              onClick={toggleSettings}
              className="flex items-center w-full py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
            >
              <span>
                <IoSettingsOutline />
              </span>
              Setting
              <RiArrowDropDownLine
                className={`transition-transform duration-200 ${
                  isSettingsOpen ? 'rotate-180' : ''
                }`}
              /> {/* Rotate the arrow */}
            </button>
            {/* Settings Dropdown */}
            {isSettingsOpen && (
              <ul className="ml-4 mt-1">
                <li>
                  <a
                    href="/notification"
                    className="block py-2 px-4 text-lg rounded hover:bg-blue-700"
                  >
                    Notification
                  </a>
                </li>
                <li>
                  <a
                    href="/search-history"
                    className="block py-2 px-4 text-lg rounded hover:bg-blue-700"
                  >
                    Search History
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2 mt-8 border-t border-blue-800 pt-4">
            <div className="flex items-center gap-3">
              <img
                src={Ellipse}
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h1 className="text-sm font-bold">News Paper</h1>
                <p className="text-xs text-gray-900 px-1 py-0.4 mt-1 border bg-orange-300 border-orange-300 rounded-xl">
                  Super Admin
                </p>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center text-orange-300 mt-3 py-3 px-4 gap-4 text-xl rounded hover:bg-blue-800"
            >
              <span className="text-2xl">
                <TbLogout />
              </span>
              Log out
            </a>
          </li>
        </ul>
      </aside>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
