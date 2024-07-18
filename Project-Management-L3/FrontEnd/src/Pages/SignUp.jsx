import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col shadow-2xl w-auto lg:mt-10">
        <div>
          <img
            src="https://cdn.technologyadvice.com/wp-content/uploads/2019/05/How-Using-JIRA-For-Project-Management-Can-Make-Any-Team-More-Productive-01.png"
            alt=""
            className="lg:h-[50rem] h-96 rounded-full"
          />
        </div>
        <div>
          <div className="flex flex-row items-center text-wrap">
            <img src={logo} alt="" />
            <h1 className="text-4xl">Project Management Tool</h1>
          </div>
          <div className="lg:ml-9 ml-4 my-8">
            <h1 className="text-3xl">Register Your Account</h1>
            <p>
              Already have an Account ?  {""}
              <Link to="/SignIn" className="font-bold">
                Sign in
              </Link>
            </p>
          </div>
          <div className="flex flex-col mt-20 lg:ml-9 ml-2">
            <input
              type="text"
              name=""
              id=""
              className="h-10 rounded-lg border-2 border-gray-600 mb-5"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name=""
              id=""
              className="h-10 rounded-lg border-2 border-gray-600 mb-5"
              placeholder="Enter Your Name"
            />
            <input
              type="password"
              name=""
              id=""
              className="h-10 rounded-lg border-2 border-gray-600 mb-5"
              placeholder="********"
            />
            <button className="border-2 rounded-lg mt-8 py-3 bg-gray-800 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
