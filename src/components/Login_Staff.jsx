// //*******************************************************************Fetching stage******************************************************
// import React, { useState } from "react";
// import Login_staff_logo from "../assets/Login-staff.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const Login_staff = () => {
//   const navigate = useNavigate();

//   // State to store staff ID and password
//   const [staffId, setStaffId] = useState("");
//   const [password, setPassword] = useState("");

//   // Function to handle login button click
//   const handleLogin = async () => {
//     try {
//       // Assuming you have an authentication endpoint on your backend
//       const response = await fetch("your-backend-auth-endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           staffId: staffId,
//           password: password,
//         }),
//       });

//       // Check if the response is successful (status code 200-299)
//       if (response.ok) {
//         // Parse the response JSON
//         const data = await response.json();

//         // Assuming the backend returns a token upon successful authentication
//         const token = data.token;

//         // Save the token to local storage or state, depending on your application structure
//         localStorage.setItem("authToken", token);

//         // Redirect to home
//         navigate("/home");
//       } else {
//         // Handle unsuccessful login (show error message, etc.)
//         console.log("Login failed. Incorrect staff ID or password.");
//       }
//     } catch (error) {
//       // Handle other errors (network issues, etc.)
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2">
//       <div className="hidden sm:block h-screen w-full">
//         <img
//           className="w-full h-full object-cover"
//           src={Login_staff_logo}
//           alt="login-staff-logo"
//         />
//       </div>

//       <div className="bg-gray-100 flex flex-col justify-center">
//         <form className="max-w-[400px] w-full mx-auto bg-white p-4">
//           <h2 className="text-4xl font-bold text-center py-6">
//             <span className="text-orange-600 ">AYU</span> Meals{" "}
//             <span className="text-orange-600 ">Delivery</span>{" "}
//           </h2>
//           <h1 className="text-[red] mb-3">Login As Staff Member</h1>

//           <div className="flex flex-col py-2">
//             <label>Staff ID</label>
//             <input
//               className="border p-2  rounded-lg"
//               type="text"
//               value={staffId}
//               onChange={(e) => setStaffId(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col py-2">
//             <label>Password</label>
//             <input
//               className="border p-2 rounded-lg"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <p>
//             Don't have an account?{" "}
//             <Link to="/staff-reg">
//               <span className="text-[blue]">
//                 Click <a>here</a>
//               </span>
//             </Link>
//           </p>

//           <button
//             className="border w-full my-5 py-2 bg-black font-bold text-white"
//             onClick={handleLogin}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login_staff;

//****************************************************************ROLE BASE*************************************************************************************************** */

import React, { useState } from "react";
import Login_staff_logo from "../assets/Login-staff.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login_staff = () => {
  const navigate = useNavigate();

  // State to store staff ID and password
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login button click
  const handleLogin = async () => {
    try {
      const response = await fetch("your-backend endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          staffId: staffId,
          password: password,
        }),
      });

      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        // Parse the response JSON
        const data = await response.json();

        // Assuming the backend returns a token and user role upon successful authentication
        const token = data.token;
        const userRole = data.role; // Replace 'role' with the actual key in the response

        // Save the token and user role to local storage or state
        localStorage.setItem("authToken", token);
        localStorage.setItem("userRole", userRole);

        // Redirect to home
        navigate("/home");
      } else {
        // Handle unsuccessful login (show error message, etc.)
        console.log("Login failed. Incorrect staff ID or password.");
      }
    } catch (error) {
      // Handle other errors (network issues, etc.)
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={Login_staff_logo}
          alt="login-staff-logo"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">AYU</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">Login As Staff Member</h1>

          <div className="flex flex-col py-2">
            <label>Staff ID</label>
            <input
              className="border p-2  rounded-lg"
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

          <p>
            Don't have an account?{" "}
            <Link to="/staff-reg">
              <span className="text-[blue]">
                Click <a>here</a>
              </span>
            </Link>
          </p>

          <button
            className="border w-full my-5 py-2 bg-black font-bold text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_staff;
