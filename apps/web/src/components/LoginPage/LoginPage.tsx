import React from "react";
import { useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <form
        onSubmit={handleSubmit(handleLogin)}
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
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}

                <div className="bg-gray-200 w-64 p-2 mb-3 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="Password"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}

                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs font-semibold">
                    <input
                      type="checkbox"
                      {...register("remember")}
                      className="mr-1"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-xs font-semibold">
                    Forgot Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-block px-12 py-2 font-semibold border-2 border-blue-800 rounded-full hover:bg-blue-800 hover:text-white"
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
