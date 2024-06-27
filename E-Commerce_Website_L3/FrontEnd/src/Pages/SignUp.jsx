import React from 'react'
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <div className="min-h-[700px] flex items-center justify-center">
      <div className="sm:flex bg-transparent shadow-2xl p-10 rounded-3xl ">
        <div className="sm:min-h-[500px] flex justify-center items-center">
          <img src={logo} className="sm:h-96 rounded-full" alt="" />
        </div>
        <div className="min-h-[500px] flex justify-center items-center">
          <form action="" className="p-6 flex flex-col justify-center">
          <h1 className="font-bold text-3xl sm:mb-6">Sign Up</h1>
          <div className="flex flex-col items-start">
                <label for="name" className="font-bold">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
            <div className="flex flex-col mt-2 items-start">
              <label for="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col mt-2 items-start">
              <label for="password" className="font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
              />
            </div>
            <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Register
              </button>
              <p className='mt-2 font-medium'>Already have an account? <Link to="/SignIn" className='underline'>Sign in</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
