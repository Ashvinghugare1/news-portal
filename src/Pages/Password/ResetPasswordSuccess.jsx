import React from "react";
import Image from "../../assets/images/pana.png";

export default function ResetPasswordSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-5">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-4xl mb-12 shadow-md">
        <div className="w-full md:w-1/2 bg-white p-5 flex flex-col justify-center items-center text-center order-2 md:order-1">
          <h2 className="font-roboto text-3xl font-medium leading-tight mb-2">
            Your password has been successfully reset!
          </h2>
          <p className="font-roboto text-base font-normal leading-5 mb-5">
            You can now log in with your new password
          </p>
          <form className="relative flex flex-col justify-start items-stretch w-full p-2">
            <button className="mt-12 cursor-pointer bg-blue-900 text-white border-none transition-colors duration-300 py-3 px-4 hover:bg-blue-900 focus:outline-none focus:border-blue-900 focus:shadow-outline">
              Login
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-blue-900 p-5 flex flex-col justify-center items-center text-white order-1 md:order-2">
          <h2 className="font-roboto text-3xl font-medium leading-tight mb-2 text-center">
            Welcome to <span className="text-yellow-500">Super Admin!</span>
          </h2>
          <p className="font-roboto text-base font-normal leading-5 mb-5 text-center">
            Empowering decisions, simplifying control
          </p>
          <div className="flex flex-col justify-center items-center">
            <img src={Image} alt="image-right" className="mt-12 w-full max-w-sm object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}