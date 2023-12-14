"use client";
import React, { useState } from "react";
// import CreateCourse from "./CreateCourse";
import axios from "axios";
// import ShowCourses from "./ShowCourses";
import NavBar from "../../components/NavBar";
// import registerImage from "../assets/register-image.jpg";

import { useRecoilState } from "recoil";
import { atom } from "recoil";

export const emailState = atom({
  key: "emailState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = React.useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [token, setToken] = useState("");
  const [isCourseAdded, setIsCourseAdded] = useState(false);

  const handleCourseAdded = (data) => {
    setIsCourseAdded(data);
  };
  const handleLogout = () => {
    localStorage.removeItem(email);
    setIsLoginSuccess(false);
  };
  const handleLogin = () => {
    const headers = {
      "Content-Type": "application/json",

      "username": email,
      "password": password,
    };

    axios
      .post("http://localhost:3000/admin/login", {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        const responseData = response.data;
        setIsLoginSuccess(true);

        setToken(responseData.token);
        localStorage.setItem(email, responseData.token);
        console.log(responseData);
        Router.push("/courses");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }

        console.error("Error config:", error.config);
      });
  };

  return (
    <div>
      {!isLoginSuccess ? (
        <div>
          <NavBar />

          <div className="h-screen w-full flex justify-center items-center lg:-mt-16 md:-mt-64 -mt-44">
            <div className="flex flex-col border-blue-600 rounded border-2 sm:w-96 w-88 h-96">
              <div className="mt-12 m-2 sm:ml-12 ml-8">
                <h2>Hi,Welcome back!</h2>
              </div>
              <div className="mt-8 m-4 sm:ml-12 ml-8">
                {" "}
                <input
                  className="border-2 w-64 h-10 rounded p-2 justify-center"
                  type={"text"}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="m-4 sm:ml-12 ml-8">
                {" "}
                <input
                  className="border-2 w-64 h-10 rounded p-2"
                  type={"text"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="m-4 sm:ml-12 ml-8">
                {" "}
                <button
                  className="w-64 h-10 rounded bg-blue-600 text-white"
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </div>
              <div className="m-4 sm:ml-24 ml-16">
                New here?{" "}
                <a className="text-blue-600" href="/register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{/* <Navigate to="/courses" replace={true} /> */}</div>
      )}
    </div>
  );
}

export default Login;
