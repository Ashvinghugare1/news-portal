import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import dashboardIcon from '../../../assets/Dashboard Icon/Vector.png';
import newIcon from '../../../assets/Dashboard Icon/Group.png' 
import manageIcon from '../../../assets/Dashboard Icon/manage.png' 
import manageNewHeadlineIcon from '../../../assets/Dashboard Icon/manage-headline.png' 
import manageNewarticleIcon from '../../../assets/Dashboard Icon/manage-article.png' 
import manageVideoIcon from '../../../assets/Dashboard Icon/manage-video.png' 
import profileIcon from '../../../assets/Dashboard Icon/profile.png'
import setting from '../../../assets/Dashboard Icon/setting.png'
import profile from '../../../assets/searchBarIcon/Ellipse.png'
import logout from '../../../assets/Dashboard Icon/logout.png'

const Sidebar = ({view}) => {
  const [ dropManage,setDropManage] = useState(false);
  const [dropNew,setDropNew] = useState(false);

  const dropNewHandler=()=>{
    setDropNew(!dropNew)
  }
  const dropManageHandler=()=>{
    setDropManage(!dropManage)
  }
  return (
    <>
      <div className="hidden lg:block flex flex-col lg:h-screen md:h-200 w-[17%] bg-[#1C2059] text-white items-center md:pt-20 lg:pt-30 fixed left-0">
        <div className=" w-full pb-3">
          <div
            href="dashbord"
            className="hover:bg-[#FFAC06] flex flex-row mt-4 px-5 py-2"
          >
            <span className="mr-4">
              <img src={dashboardIcon} alt="dashboard Icon" />
            </span>
            Dashboard
          </div>

          <div
            className={`hover:bg-[#FFAC06] flex flex-row mt-4 px-5 py-2  ${
              dropNew ? "bg-[#FFAC06]" : "bg-white-0"
            }`}
            onClick={() => dropNewHandler()}
          >
            <span className="mr-4">
              <img src={newIcon} alt="" />
            </span>
            New
          </div>
          {dropNew && (
            <div className="flex flex-col pl-13 text-sm ">
              <Link
                to={"/Post-New-Headline"}
                className="hover:text-[#FFAC06] mt-2"
              >
                Post New Headline
              </Link>
              <Link
                to={"/Post-New-Article"}
                className="hover:text-[#FFAC06] mt-2"
              >
                Post New Article/Post
              </Link>
              <Link to={"/Post-Video"} className="hover:text-[#FFAC06] mt-2">
                Post Video
              </Link>
            </div>
          )}

          <div
            className={`hover:bg-[#FFAC06] flex flex-row mt-4  px-5 py-2 ${
              dropManage ? "bg-[#FFAC06]" : "bg-white-0"
            }`}
            onClick={() => dropManageHandler()}
          >
            <span className="mr-4">
              <img src={manageIcon} alt="" />
            </span>
            Manage
          </div>
          {dropManage && (
            <div className="flex flex-col pl-13 text-sm">
              <Link
                to={"/Manage-New-Headline"}
                className="flex flex-row hover:text-[#FFAC06] mt-2"
              >
                <span className="mr-3">
                  <img
                    src={manageNewHeadlineIcon}
                    alt=""
                    className="hover:text-[#FFAC06]"
                  />
                </span>
                Manage New Headline
              </Link>
              <Link
                to={"/Manage-New-Article"}
                className="flex flex-row hover:text-[#FFAC06] mt-2"
              >
                <span className="mr-3">
                  <img src={manageNewarticleIcon} alt="" />
                </span>
                Manage New Article/Post 
              </Link>
              <Link
                to={"/Manage-Video"}
                className="flex flex-row hover:text-[#FFAC06] mt-2"
              >
                <span className="mr-3">
                  <img src={manageVideoIcon} alt="" />
                </span>
                Manage Video
              </Link>
            </div>
          )}

          <Link
            to="/profile"
            className="hover:bg-[#FFAC06] mt-4 px-5 py-2 flex flex-row"
          >
            <span className="mr-4">
              <img src={profileIcon} alt="" />
            </span>
            Profile 
          </Link>

          <Link
            to="/setting"
            className="hover:bg-[#FFAC06] mt-4 px-5 py-2 flex flex-row"
          >
            <span className="mr-4">
              <img src={setting} alt="" />
            </span>
            Setting 
          </Link>
        </div>
        <div className="border-t lg:w-[90%] sm:w-[100%] p-3 sm:h-25">
          <div className="flex flex-row py-5">
            <img src={profile} alt="profile" className='sm:h-12'/>
            <div className="pl-2  sm:h-3">
              <p className=' lg:text-sm text-xs'>News Paper</p>
              <p className="text-xs bg-[#FFCD71] text-black border rounded-lg lg:my-3 lg:p-1 pl-1">
                Super Admin
              </p>
            </div>
          </div>
          <div className="flex flex-row p-2">
            <span>
              <img src={logout} alt="" />
            </span>
            <button className="text-[#FFAC06] px-2">Log Out</button>
          </div>
        </div>
      </div>
      {view && (
        <div className="fixed bg-[#1C2059] text-white h-250 z-100 pt-20 p-4 lg:hidden">
          <div className=" w-full pb-3">
            <div
              href="dashbord"
              className="hover:bg-[#FFAC06] flex flex-row mt-4 px-5 py-2"
            >
              <span className="mr-4">
                <img src={dashboardIcon} alt="dashboard Icon" />
              </span>
              Dashboard
            </div>

            <div
              className={`hover:bg-[#FFAC06] flex flex-row mt-4 px-5 py-2  ${
                dropNew ? "bg-[#FFAC06]" : "bg-white-0"
              }`}
              onClick={() => dropNewHandler()}
            >
              <span className="mr-4">
                <img src={newIcon} alt="" />
              </span>
              New
            </div>
            {dropNew && (
              <div className="flex flex-col pl-13 text-sm ">
                <Link
                  to={"/Post-New-Headline"}
                  className="hover:text-[#FFAC06] mt-2"
                >
                  Post New Headline
                </Link>
                <Link
                  to={"/Post-New-Article"}
                  className="hover:text-[#FFAC06] mt-2"
                >
                  Post New Article/Post
                </Link>
                <Link to={"/Post-Video"} className="hover:text-[#FFAC06] mt-2">
                  Post Video
                </Link>
              </div>
            )}

            <div className={`hover:bg-[#FFAC06] flex flex-row mt-4  px-5 py-2 ${dropManage ? "bg-[#FFAC06]" : "bg-white-0"}`}
              onClick={() => dropManageHandler()}>
              <span className="mr-4">
                <img src={manageIcon} alt="" />
              </span>
              Manage 
            </div>
            {dropManage && (
              <div className="flex flex-col pl-13 text-sm">
                <Link to={"/Manage-New-Headline"} className="flex flex-row hover:text-[#FFAC06] mt-2">
                  <span className="mr-3">
                    <img src={manageNewHeadlineIcon} alt="" className="hover:text-[#FFAC06]"/>
                  </span>
                  Manage New Headline
                </Link>
                <Link to={"/Manage-New-Article"} className="flex flex-row hover:text-[#FFAC06] mt-2" >
                  <span className="mr-3">
                    <img src={manageNewarticleIcon} alt="" />
                  </span>
                  Post New Article/Post
                </Link>
                <Link to={"/Manage-Video"} className="flex flex-row hover:text-[#FFAC06] mt-2" >
                  <span className="mr-3">
                    <img src={manageVideoIcon} alt="" />
                  </span>
                  Manage Video
                </Link>
              </div>
            )}

            <Link href="/profile" className="hover:bg-[#FFAC06] mt-4 px-5 py-2 flex flex-row">
              <span className="mr-4">
                <img src={profileIcon} alt="" />
              </span>
              Profile
            </Link>

            <Link href="/setting" className="hover:bg-[#FFAC06] mt-4 px-5 py-2 flex flex-row">
              <span className="mr-4"><img src={setting} alt="" /></span>
                Setting
            </Link>
          </div>
          <div className="border-t w-[90%]">
            <div className="flex flex-row py-5">
              <img src={profile} alt="" />
              <div className="pl-2">
                <h2>News Paper</h2>
                <p className="text-xs bg-[#FFCD71] text-black border rounded-lg pl-1">
                  Super Admin
                </p>
              </div>
            </div>
            <div className="flex flex-row pl-1">
              <span>
                <img src={logout} alt="" />
              </span>
              <button className="text-[#FFAC06] px-2">Log Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;