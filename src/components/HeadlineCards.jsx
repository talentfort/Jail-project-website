import React from "react";
import Test1 from "../assets/test1.jpg";
import { Link } from "react-router-dom";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid  ">
      <Link to="/meal">
        <div className="rounded-xl relative">
          <div className="flex absolute w-full h-full bg-black/50 text-white rounded-xl text-center justify-center">
            <p className="font-bold text-4xl pt-4 px-2 md:text-6xl lg:text-4xl">
              Meals
            </p>

            <button className="bg-white text-black border-white text-center justify-center absolute mt-[80px]">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={Test1}
            alt="test1"
          />
        </div>
      </Link>
    </div>
  );
};

export default HeadlineCards;
