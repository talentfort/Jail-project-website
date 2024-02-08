import React, { useState, useEffect } from "react";

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [startCountdown, setStartCountdown] = useState(false);

  useEffect(() => {
    let timer;

    if (startCountdown && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, startCountdown]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const sendOtp = () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    fetch("http://localhost:3001/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        const receivedOtp = data.otp.substring(0, 4);
        setOtp(receivedOtp);
        setStartCountdown(true);
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
      });
  };

  const handleOtpVerification = () => {
    if (otp === "") {
      alert("Please enter OTP.");
    } else if (otp.length !== 4 || isNaN(otp)) {
      alert("OTP should be a 4-digit number.");
    } else {
      fetch("http://localhost:3001/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, enteredOtp: otp }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setIsOtpVerified(true);
            setStartCountdown(false);
            alert("OTP verification successful! Redirecting to the home page.");
            // Redirect to the home page or perform other actions
          } else {
            alert("Invalid OTP. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error verifying OTP:", error);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3 text-orange-600">
          Verification Page
        </h1>
        <div className="flex flex-col items-center">
          <label className="mb-1">Phone Number:</label>
          <input
            placeholder="Enter Phone Number"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="h-8 border-2 border-gray-300 rounded-lg text-center mb-3"
          />
          <button className="bg-black text-white py-2 px-4" onClick={sendOtp}>
            Send OTP
          </button>
        </div>
        <progress
          value={(countdown / 300) * 100}
          max="100"
          className="w-full h-5 bg-gray-300 rounded mt-2"
        />
        {countdown > 0 && (
          <p className="mt-2">
            Time left: {formatTime(Math.floor(countdown / 60))}:
            {formatTime(countdown % 60)}
          </p>
        )}
        <div className="flex flex-col items-center">
          <label className="mt-2 mb-1">OTP:</label>
          <input
            placeholder="Enter OTP here"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="h-8 border-2 border-gray-300 rounded-lg text-center mb-3"
          />
          <button
            className="bg-black text-white py-2 px-4"
            onClick={handleOtpVerification}
          >
            Verify OTP
          </button>
        </div>
        {isOtpVerified && (
          <p className="text-green-600 mt-2">OTP verification successful!</p>
        )}
      </div>
    </div>
  );
};

export default Verification;
