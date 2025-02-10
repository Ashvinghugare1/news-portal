import React from "react";
import Image from "../../assets/images/Group.png";
import Eye from "../../assets/images/eye.png";

export default function ResetPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="flex justify-center w-full max-w-4xl shadow-md">
        <div className="hidden w-1/2 bg-blue-900 p-5 md:flex md:flex-col md:justify-center md:items-center text-white">
          <div className="flex flex-col justify-center items-center">
            <img src={Image} alt="image-left" className="w-full max-w-sm object-contain" />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-5 flex flex-col justify-center items-center text-center">
          <h2 className="font-roboto text-3xl font-medium leading-tight mb-2">
            Reset Password
          </h2>
          <p className="font-roboto text-base font-normal leading-5 mb-5">
            Set New Password To Your Account
          </p>
          <form className="relative flex flex-col justify-start items-stretch w-full p-2">
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="newPassword"
                  placeholder="*******"
                  className="font-roboto text-base font-normal leading-5 rounded outline-none border border-gray-300 w-full py-2 px-3 pr-8"
                />
                <img src={Eye} alt="eye" className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-auto cursor-pointer" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="*******"
                  className="font-roboto text-base font-normal leading-5 rounded outline-none border border-gray-300 w-full py-2 px-3 pr-8"
                />
                <img src={Eye} alt="eye" className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-auto cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-end">
              <p className="font-roboto text-base font-normal leading-5 text-gray-700">
                Go Back To <span className="text-blue-900 font-semibold cursor-pointer">Login</span>
              </p>
            </div>
            <button className="mt-12 cursor-pointer bg-blue-900 text-white border-none transition-colors duration-300 py-3 px-4 hover:bg-blue-900 focus:outline-none focus:border-blue-900 focus:shadow-outline">
              Reset Password
            </button>
            <div className="flex justify-center pt-5">
              <p className="font-roboto text-base font-normal leading-5 text-gray-700">
                Don't have an account? <span className="text-blue-900 font-semibold cursor-pointer">Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
