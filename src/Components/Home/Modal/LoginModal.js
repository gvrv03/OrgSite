"use client";
import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import Link from "next/link";
import React from "react";

const LoginModal = ({ state, setState }) => {
  return (
    <Modal
      open={state}
      onClose={() => {
        setState(false);
      }}
    >
      <ModalDialog layout="center" size="sm" variant="plain">
        <ModalClose />
        <h2 className="font-semibold text-base">Sign In </h2>
        <form className="flex gap-2 flex-col">
          <input
            type="text"
            placeholder="Username"
            className=" rounded-md border outline-none w-full  p-2"
            name="username"
          />
          <input
            type="password"
            placeholder="Password"
            className=" rounded-md border outline-none w-full  p-2"
            name="username"
          />
          <Link
            href="/"
            className="text-xs flex justify-end w-full text-blue-700"
          >
            Forgot password ?
          </Link>
          <button className="bg-primaryColor text-white font-semibold py-2">
            Sign In
          </button>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default LoginModal;
