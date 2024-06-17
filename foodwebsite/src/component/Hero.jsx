import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="container pt-8 p-10">
      <div className="grid xl:grid-cols-3 xl:grid-row-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl-row-end-[-1]  ">
          <img
            className="w-full object-cover rounded-lg "
            src="/hero__1.webp"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[-10%]  translate-y-[50%] sm:space-y-4 ">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold w-[80%]">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-500 text-xl  sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $18.36
            </div>
            <div className="bg-accentdark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[sm:px-6 sm:py-3 cursor-pointer top-6">
              Shop Now
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full object-cover rounded-lg"
            src="/hero__2.webp"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[-10%]  translate-y-[50%] sm:space-y-1 ">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold ">
              Best Yummy Pizza
            </h2>
            <p className="text-gray-500 text-xl  sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-2">
              $25
            </div>
            <div className="bg-accentdark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[sm:px-6 sm:py-3 cursor-pointer top-4">
              Shop Now
              <FaArrowRightLong />
            </div>
          </div>
        </div>
       

        <div className="relative left-[214%] bottom-[110%]">
          <img
            className="w-full object-cover rounded-lg"
            src="/hero__3.webp"
            alt=""
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[-10%]  translate-y-[50%] sm:space-y-1 ">
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold ">
              Best Yummy Chips
            </h2>
            <p className="text-gray-500 text-xl  sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-2">
              $10
            </div>
            <div className="bg-accentdark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[sm:px-6 sm:py-3 cursor-pointer top-4">
              Shop Now
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
