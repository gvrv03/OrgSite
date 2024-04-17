"use client";
import Link from "next/link";
import React from "react";

const SignUpCom = () => {
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
        <h2 className="font-semibold">Sign Up</h2>
        <div className=" border   outline-none flex gap-2">
          <select name="gender">
            <option value="Male">Mr</option>
            <option value="Female">Mrs</option>
          </select>
          <input
            type="text"
            placeholder="Name"
            className=" outline-none w-full  p-2"
            name="name"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="  border outline-none w-full  p-2"
          name="email"
        />

        <input
          type="date"
          placeholder="Date of birth"
          className="  border outline-none w-full  p-2"
          name="DOB"
        />

        <input
          type="password"
          placeholder="Password"
          className="  border outline-none w-full  p-2"
          name="password"
        />
        <input
          type="password"
          placeholder="Conform Password"
          className="  border outline-none w-full  p-2"
          name="cpassword"
        />
        <input
          type="number"
          maxLength="10"
          placeholder="Phone No."
          className="  border outline-none w-full  p-2"
          name="phoneNo"
        />
        <p className=" text-gray-500  py-2 text-xs">
          By Create an account, I accept the{" "}
          <Link href="/" className="text-xs w-full font-semibold text-blue-700">
            Terms & Conditions
          </Link>{" "}
          &{" "}
          <Link
            href="/Auth/Login"
            className="text-xs w-full font-semibold text-blue-700"
          >
            Privacy Policy
          </Link>
        </p>
        <button
          type="submit"
          className="bg-primaryColor text-white font-semibold py-2"
        >
          Send OTP
        </button>
        <p className=" text-gray-500 text-center text-xs">
          If you Already have an account ?{" "}
          <Link
            href="/Auth/Login"
            className="text-xs w-full font-semibold text-blue-700"
          >
            Sign In
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};
export default SignUpCom;
