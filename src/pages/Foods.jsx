import React from "react";
import Navbar from "../components/Navbar";
import Meals from "../components/Meals";
import ThreeMeals from "../components/ThreeMeals";
import Beverage from "../components/Beverage";

const Foods = () => {
  return (
    <div>
      <Navbar />
      <ThreeMeals />
      <Meals />
      <Beverage />
    </div>
  );
};

export default Foods;
