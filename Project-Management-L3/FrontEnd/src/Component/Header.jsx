import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
function Header() {
  return (
    <div>
      <header className="bg-neutral-800 rounded-md sticky top-0 shadow ">
        <nav className="h-auto text-white flex flex-row justify-around items-center w-screen-2xl">
          <div className="m-2 lg:m-5 rounded-2xl">
            <Link>
              <img src={logo} className="lg:mr-3 h-12 rounded-xl" alt="" srcset="" />
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <div className="mr-[0.5rem] lg:mr-[2rem]">
              <NavLink to="/" className={({isActive})=>`${isActive?"text-gray-400":"text-white"}`}>Dashboard</NavLink>
            </div>
            <div>
              <NavLink to="/SignIn" className={({isActive})=>`${isActive?"text-gray-400":"text-white"}`}>Project</NavLink>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className=" lg:mr-[2rem] border-2 lg:py-2 lg:px-3 p-1 hover:scale-110 rounded-lg hover:border-gray-600">
              <Link to="SignIn">Logout</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
