import React from "react";
import User_logo from "../assets/User_Sel.jpg";
import { Link } from "react-router-dom";

const UserSelection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={User_logo}
          alt="user-selection-logo"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">AYU</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">Select User Type</h1>

          <Link to="/login_staff">
            <div className="flex items-center justify-center">
              <button className="border w-[200px] my-4 py-2 bg-black text-white font-bold">
                Staff
              </button>
            </div>
          </Link>

          <Link to="/login_prisoner">
            <div className="flex items-center justify-center">
              <button className="border w-[200px]  my-2 py-2 bg-black text-white font-bold">
                Prisonner
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserSelection;
