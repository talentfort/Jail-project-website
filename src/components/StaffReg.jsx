//*****************************************************************************fetching stage StaffReg******************************************************************************************************* */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reg from "../assets/Reg.jpg";

const StaffReg = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [userName, setUserName] = useState("");
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [section, setSection] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if passwords match before making the registration request
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    try {
      const response = await fetch("your-backend-registration-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          staffId,
          password,
          confirmPassword,
          designation,
          section,
        }),
      });

      if (response.ok) {
        // Registration successful, navigate to "/otp-ver"
        navigate("/otp-ver");
      } else {
        // Handle unsuccessful registration (show error message, etc.)
        console.log("Registration failed.");
      }
    } catch (error) {
      // Handle other errors (network issues, etc.)
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block h-screen w-full">
        <img className="w-full h-full object-cover" src={Reg} alt="Reg-logo" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          onSubmit={handleRegister}
        >
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">AYU</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">Register As Staff Member</h1>

          <div className="flex flex-col py-2">
            <label>User Name</label>
            <input
              className="border p-2  rounded-lg"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Staff ID</label>
            <input
              className="border p-2 rounded-lg"
              type="text"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2 rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Re Enter the Password</label>
            <input
              className={`border p-2 rounded-lg ${
                passwordMatchError ? "border-red-500" : ""
              }`}
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordMatchError(false);
              }}
            />
            {passwordMatchError && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match.
              </p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label>Designation</label>
            <input
              className="border p-2 rounded-lg"
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Section</label>
            <input
              className="border p-2 rounded-lg"
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
          </div>

          <button
            className="border w-full my-5 py-1 bg-black font-bold text-white"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default StaffReg;
