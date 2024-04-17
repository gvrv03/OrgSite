"use client";
import Link from "next/link";
import React from "react";

const LoginCom = () => {
  return (
    <div className=" w-full  grid place-items-center p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson);
        }}
        className="w-full md:w-[500px] flex gap-2 flex-col md:p-5  md:border "
      >
        <h2 className="font-semibold">Sign In</h2>
        <input
          type="text"
          placeholder="Email"
          className="  border outline-none w-full  p-2"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="  border outline-none w-full  p-2"
          name="password"
        />
        <Link
          href="/"
          className="text-sm font-semibold flex justify-end w-full  py-2 text-blue-700"
        >
          Forgot password ?
        </Link>
        <button
          type="submit"
          className="bg-primaryColor text-white font-semibold py-2"
        >
          Sign In
        </button>
        <p className=" text-gray-500 text-center text-xs">
          If you don't have an account ?{" "}
          <Link
            href="/Auth/SignUp"
            className="text-xs w-full font-semibold text-blue-700"
          >
            Create an Account
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};
export default LoginCom;
