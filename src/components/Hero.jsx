import React from "react";
import CoverNew from "../assets/Cover_new.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="max-h-[500px] relative ">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px]  bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            <span className="text-orange-600">The</span> Best
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
            <span className="text-orange-600"> Food</span> Delivery
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={CoverNew}
          alt="cover"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
