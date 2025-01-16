import React from "react";


const LoginPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <form
        className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"
      >
        <div className="flex w-2/3 max-w-4xl bg-white shadow-2xl rounded-2xl">
          <div className="w-3/5 p-5">
            <div className="font-bold text-left">
              <span className="text-blue-800">EventNih</span>
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-800">
                Sign in to Account
              </h2>
              <div className="inline-block w-10 mb-2 border-2 border-blue-800"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 w-64 p-2 mb-3 flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                {(
                  <p className="text-red-500 text-xs"></p>
                )}

                <div className="bg-gray-200 w-64 p-2 mb-3 flex items-center">
                  <input
                    type="password"
                    
                    
                    placeholder="Password"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
               
                

                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs font-semibold">
                  </label>
                  <a href="#" className="text-xs font-semibold">
                    Forgot Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-block px-12 py-2 font-semibold border-2 border-blue-800 rounded-full bg-blue-800 hover:text-white"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="w-2/5 px-12 text-white bg-blue-800 rounded-br-2xl rounded-tr-2xl py-36">
            <h2 className="mb-2 text-3xl font-bold">Hello Friends!</h2>
            <div className="w-10 border-2 border-white inline-block"></div>
            <p className="mb-2">
              Fill up personal information and start journey with us.
            </p>
            <a
              href="#"
              className="px-12 py-2 font-semibold border-2 border-white rounded-full inline-block m-5 hover:bg-white hover:text-blue-800"
            >
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;