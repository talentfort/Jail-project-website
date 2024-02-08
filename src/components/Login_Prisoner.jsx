// import React, { useState } from "react";
// import Logo1 from "../assets/login-logo.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const Login_Prisoner = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const [userName, setUserName] = useState("");
//   const [wardNo, setWardNo] = useState("");

//   const handleNextButtonClick = async () => {
//     // Construct the data object to be sent to the backend
//     const data = {
//       userName: userName,
//       wardNo: wardNo,
//     };

//     try {
//       // Make a POST request to the backend API endpoint
//       const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       // Check if the request was successful (status code 2xx)
//       if (response.ok) {
//         // Handle success, you can redirect or perform other actions here
//         console.log("Data saved successfully!");

//         // Redirect to the "./otp-ver" component
//         navigate("/otp-ver");
//       } else {
//         // Handle error cases
//         console.error("Error saving data to the backend");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 ">
//       <div className="hidden sm:block h-screen w-full">
//         <img
//           className="w-full h-full object-cover"
//           src={Logo1}
//           alt="login-logo"
//         />
//       </div>

//       <div className="bg-gray-100 flex flex-col justify-center">
//         <form className="max-w-[400px] w-full mx-auto bg-white p-4">
//           <h2 className="text-4xl font-bold text-center py-6">
//             <span className="text-orange-600 ">AYU</span> Meals{" "}
//             <span className="text-orange-600 ">Delivery</span>{" "}
//           </h2>
//           <h1 className="text-[red] mb-3">Login for a Prisoner</h1>
//           <div className="flex flex-col py-2">
//             <label>User Name</label>
//             <input
//               className="border p-2  rounded-lg"
//               type="text"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col py-2">
//             <label>Ward No:</label>
//             <input
//               className="border p-2 rounded-lg"
//               type="text"
//               value={wardNo}
//               onChange={(e) => setWardNo(e.target.value)}
//             />
//           </div>

//           <button
//             type="button"
//             onClick={handleNextButtonClick}
//             className="border w-full my-5 py-2 bg-black text-white font-bold"
//           >
//             Next
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login_Prisoner;

//*************************************************************************************ROLE BASE******************************************************************************//

import React, { useState } from "react";
import Logo1 from "../assets/login-logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login_Prisoner = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [userName, setUserName] = useState("");
  const [wardNo, setWardNo] = useState("");

  const handleNextButtonClick = async () => {
    // Construct the data object to be sent to the backend
    // console.log("Next button clicked");
    const data = {
      userName: userName,
      wardNo: wardNo,
    };

    try {
      // Make a POST request to the backend API endpoint
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Parse the response JSON
        const responseData = await response.json();

        // Assuming the backend returns a token and user role upon successful authentication
        const token = responseData.token;
        const userRole = responseData.role; // Replace 'role' with the actual key in the response

        // Save the token and user role to local storage or state
        localStorage.setItem("authToken", token);
        localStorage.setItem("userRole", userRole);

        // Redirect to the "./otp-ver" component
        navigate("/otp-ver");
      } else {
        // Handle error cases
        console.error("Error saving data to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src={Logo1}
          alt="login-logo"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">
            <span className="text-orange-600 ">AYU</span> Meals{" "}
            <span className="text-orange-600 ">Delivery</span>{" "}
          </h2>
          <h1 className="text-[red] mb-3">Login as a Prisoner</h1>
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
            <label>Ward No:</label>
            <input
              className="border p-2 rounded-lg"
              type="text"
              value={wardNo}
              onChange={(e) => setWardNo(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleNextButtonClick}
            className="border w-full my-5 py-2 bg-black text-white font-bold"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_Prisoner;
