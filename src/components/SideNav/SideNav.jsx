import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { GrNewWindow } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuFolderCog } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoIosPaper, IoMdCreate, IoMdVideocam } from "react-icons/io";
import { MdOutlineManageAccounts, MdOutlinePostAdd } from "react-icons/md";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import Ellipse from '../../assets/home/Ellipse.png' 
import {RxHamburgerMenu} from "react-icons/rx";
import {IoClose} from "react-icons/io5";



const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isManagementOpen, setIsManagementOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-40">{/* Logo or Branding Here */}</div>

      <ul>
        {/* Dashboard */}
        <li className="mb-2">
          <a
            href="/"
            className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
          >
            <MdDashboard />
            Dashboard
          </a>
        </li>

        {/* New Dropdown */}
        <li className="mb-2">
          <button
            onClick={() => setIsNewOpen(!isNewOpen)}
            className="flex items-center w-full py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
          >
            <GrNewWindow />
            New
            <RiArrowDropDownLine className={`transition-transform duration-200 ${isNewOpen ? "rotate-180" : ""}`} />
          </button>
          {isNewOpen && (
            <ul className="ml-4 mt-1">
              <li>
                <a href="/post-new-headline" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <IoIosPaper className="mr-2" />
                  Post New Headline
                </a>
              </li>
              <li>
                <a href="/post-new-article" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <IoMdCreate className="mr-2" />
                  Post New Article/Post
                </a>
              </li>
              <li>
                <a href="/post-video" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <IoMdVideocam className="mr-2" />
                  Post Video
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Management Dropdown */}
        <li className="mb-2">
          <button
            onClick={() => setIsManagementOpen(!isManagementOpen)}
            className="flex items-center w-full py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
          >
            <LuFolderCog />
            Management
            <RiArrowDropDownLine className={`transition-transform duration-200 ${isManagementOpen ? "rotate-180" : ""}`} />
          </button>
          {isManagementOpen && (
            <ul className="ml-4 mt-1">
              <li>
                <a href="/manage-headline" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <MdOutlineManageAccounts className="mr-2" />
                  Manage New Headline
                </a>
              </li>
              <li>
                <a href="/manage-article" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <MdOutlinePostAdd className="mr-2" />
                  Manage New Article/Post
                </a>
              </li>
              <li>
                <a href="/manage-video" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <IoMdVideocam className="mr-2" />
                  Manage Video
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Profile */}
        <li className="mb-2">
          <a
            href="/profile"
            className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
          >
            <FaRegUser />
            Profile
          </a>
        </li>

        {/* Settings Dropdown */}
        <li className="mb-2">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex items-center w-full py-2 px-4 gap-5 text-xl rounded hover:bg-blue-800"
          >
            <IoSettingsOutline />
            Setting
            <RiArrowDropDownLine className={`transition-transform duration-200 ${isSettingsOpen ? "rotate-180" : ""}`} />
          </button>
          {isSettingsOpen && (
            <ul className="ml-4 mt-1">
              <li>
                <a href="/notification" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <IoNotificationsOutline className="mr-2" />
                  Notification
                </a>
              </li>
              <li>
                <a href="/search-history" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <IoSearchOutline className="mr-2" />
                  Search History
                </a>
              </li>
              <li>
                <a href="/terms-services" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <HiOutlineDocumentText className="mr-2" />
                  Terms & Services
                </a>
              </li>
              <li>
                <a href="/faq" className="flex items-center py-2 px-4 text-lg rounded hover:bg-blue-700">
                  <HiOutlineDocumentText className="mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li className="mb-2 mt-8 border-t border-blue-800 pt-4">
          <div className="flex items-center gap-3">
            <img src={Ellipse} alt="Logo" className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-sm font-bold">News Paper</h1>
              <p className="text-xs text-gray-900 px-1 py-0.4 mt-1 border bg-orange-300 border-orange-300 rounded-xl">
                Super Admin
              </p>
            </div>
          </div>
          <a href="#" className="flex items-center text-orange-300 mt-3 py-3 px-4 gap-4 text-xl rounded hover:bg-blue-800">
            <TbLogout className="text-2xl" />
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
};

export default Sidebar;
