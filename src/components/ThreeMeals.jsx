import React from "react";
import { Link } from "react-router-dom";
import Breakfast from "../assets/BreakFast.jpg";
import Lunch from "../assets/Lunch.jpg";
import Dinner from "../assets/Dinner.jpg";

const ThreeMeals = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="font-bold text-4xl text-center mb-8">
        <span className="text-orange-600">Delight</span> Your
        <span className="text-orange-600"> Taste</span> Buds
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/foods?category=breakfast">
          {" "}
          {/* Pass category as query parameter */}
          <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 text-white rounded-xl flex flex-col justify-center items-center">
              <p className="font-bold text-3xl px-2">Breakfast</p>
            </div>

            <img
              className="max-h-[100px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={Breakfast}
              alt="breakfast"
            />
          </div>
        </Link>

        <Link to="/foods?category=lunch">
          <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 text-white rounded-xl flex flex-col justify-center items-center">
              <p className="font-bold text-3xl px-2">Lunch</p>
            </div>

            <img
              className="max-h-[100px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={Lunch}
              alt="lunch"
            />
          </div>
        </Link>

        <Link to="/foods?category=dinner">
          <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 text-white rounded-xl flex flex-col justify-center items-center">
              <p className="font-bold text-3xl px-2">Dinner</p>
            </div>

            <img
              className="max-h-[100px] md:max-h-[200px] w-full object-cover rounded-xl"
              src={Dinner}
              alt="dinner"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ThreeMeals;
